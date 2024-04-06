import { NextRequest, NextResponse } from 'next/server';
import { stripe } from './../../../../utils/stripe';
import { supabaseAdmin } from './../../../../utils/supabaseServer';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
    try {
      const rawBody = await request.text();
      const signature = request.headers.get('stripe-signature');
      const supabase = supabaseAdmin();
      let event;
      try {
        event = stripe.webhooks.constructEvent(rawBody, signature!, process.env.STRIPE_WEBHOOK_SECRET!);
      } catch (error: any) {
        console.error(`Webhook signature verification failed: ${error.message}`);
        return NextResponse.json({ message: 'Webhook Error' }, { status: 400 });
      }
  
      // Handle the checkout.session.completed event
      if (event.type === 'checkout.session.completed') {
        const session: Stripe.Checkout.Session = event.data.object;
        const userId = session.metadata?.user_id;
        // Create or update the stripe_customer_id in the stripe_customers table
        const { error } = await supabase
        .from('stripe_customers')
        .upsert({ 
            user_id: userId, 
            stripe_customer_id: session.customer, 
            subscription_id: session.subscription, 
            plan_active: true, 
            plan_expires: null,
            created_at: new Date(), 
        })

        if(error){
            console.log(error.message)
            return NextResponse.json({ message: error.message }, { status: 500 });
        }
        console.log('Success stored in DB');
      }
  
      if (event.type === 'customer.subscription.updated') {
        const subscription: Stripe.Subscription = event.data.object;
            // Update the plan_expires field in the stripe_customers table
        const { error } = await supabase
            .from('stripe_customers')
            .update({ plan_expires: subscription.cancel_at })
            .eq('subscription_id', subscription.id);
            if(error){
              console.log(error.message)
              return NextResponse.json({ message: error.message }, { status: 500 });
          }
      }
  
      if (event.type === 'customer.subscription.deleted') {
        const subscription = event.data.object;

        const { error } = await supabase
        .from('stripe_customers')
        .update({ plan_active: false, subscription_id: null })
        .eq('subscription_id', subscription.id);
        if(error){
            console.log(error.message)
            return NextResponse.json({ message: error.message }, { status: 500 });
        }
      }
  
      return NextResponse.json({ message: 'success' });
    } catch (error: any) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/FItNHm9Exnf
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const handleRedirectHome = () => {
  window.location.href = "/home"
}

export function Success() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="flex flex-col items-center space-y-0">
        <CardTitle className="text-3xl">Compra finalizada</CardTitle>
        <CardDescription className="mt-2">Agradecemos a sua compra!!</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
          <Button onClick={handleRedirectHome}  className="w-full" size="lg" variant="outline">
            Voltar
          </Button>
      </CardFooter>
    </Card>
  )
}
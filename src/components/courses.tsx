//TODO: Make the courses purchaseble in stripe and update database
'use client';
import Image from "next/image";

import { useAnimate, useInView } from "framer-motion"
import { useEffect } from 'react';
import { Link } from "./ui/link";

export default function Courses(){
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)
  
    useEffect(() => {
        if (isInView) {
          animate(scope.current, { opacity: 1, y: 0 , transition: {
            duration: 0.45,
            ease: 'easeInOut', 
          },})
        }
     }, [animate, isInView, scope])

    function handleAnchorClick(event: { preventDefault: () => void; }, id: string) {
        event.preventDefault(); // Prevent default jump behavior
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    return(
            <section id='courses' ref={scope} className="w-full py-12 md:py-24 lg:py-32 opacity-0">
                <div className="grid text-center c gap-6 px-4 md:px-6 lg:gap-10">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cursos</h2>
                    <p className="mx-auto max-w-[700px] text-gray-500/relaxed dark:text-gray-400">
                        Aprenda a construir sites e aplicações web do design frontend aos bancos de dados backend, nós temos tudo o que você precisa.
                    </p>
                </div>
                <div className="lg:mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-2">
                    <Image
                        alt="Image"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                        height="280"
                        src="/placeholder.svg"
                        width="500"
                    />
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Fundamentos de Desenvolvimento de Software</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Aprenda os fundamentos do desenvolvimento de software com este curso fácil de seguir. 
                        </p>
                    </div>
                    </div>
                    <div className="space-y-2">
                    <Image
                        alt="Image"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                        height="280"
                        src="/placeholder.svg"
                        width="500"
                    />
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Web com Typescript</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Aprenda a criar aplicações rápidas e confiáveis com Typescript.
                        </p>
                    </div>
                    </div>
                    <div className="space-y-2">
                    <Image
                        alt="Image"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                        height="280"
                        src="/placeholder.svg"
                        width="500"
                    />
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Clean Archtechture</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Mergulhe neste padrão de arquitetura com nosso guia passo a passo.
                        </p>
                    </div>
                    </div>
                    
                    
                </div>
                <div className="space-y-2">
                        <Link size={'lg'} href="/courses">Ver todos</Link>
                    </div>
                <div className="mx-auto">
                        <p className="text-xl font-bold text-gray-500 dark:text-gray-400">Quer aproveitar e levar logo tudo de uma vez?</p>
                        <Link size={'lg'} variant={'teal'} href='#' onClick={(event) => handleAnchorClick(event, 'assinar')} className="text-black text-xl mt-5 w-64">Quero todos os cursos</Link>
                    </div>
                </div>
            </section>
    ) 
}
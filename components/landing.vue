<template>
    <div>
        <section class="grid grid-cols-1 md:grid-cols-2 items-center mt-4 gap-4 mx-auto max-w-7xl">
            <div class="w-full h-[350px] md:h-[600px] order-2 md:order-1">
                <img src="/images/WhatsApp1-removebg.png" class="w-full h-full object-contain">
            </div>   
            <div class="flex flex-col text-center md:text-start p-10 order-1 md:order-2">
                <h1 class="font-bold text-3xl md:text-5xl mb-8">Dein Start in die deutsche Sprache</h1>
                <p class="text-gray-700 md:text-xl mb-12">Du möchtest Deutsch lernen? Super, dann bist du hier genau richtig! Ich weiß, wie es ist, am Anfang zu stehen. Ich werde dir helfen, die ersten wichtigen Wörter und Sätze zu lernen, Schritt für Schritt. Mit einfachen Übungen und viel Unterstützung wirst du schnell Fortschritte sehen. Trau dich – ich helfe dir dabei!</p>
                <div>
                    <!-- <NuxtLink to="/uber-mich" type="button" aria-disabled="false"
                        class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-4 px-10 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed bg-red-700 stroke-white text-white hover:bg-red-950 h-[42px] min-w-[42px] gap-2 disabled:bg-slate-100 disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-slate-100">
                            Über mich
                    </NuxtLink> -->
                    <router-link to="/uber-mich" class="w-full md:w-auto rounded-lg bg-red-700 px-8 py-3 md:py-4 text-white transition hover:bg-black  text-center inline-block text-md">
                        Über mich 
                    </router-link>
                </div>
            </div>
        </section>

        <section class="mb-12 py-24 bg-gray-50">
            <div class="flex justify-center text-center mb-12 px-4">
                <h1 class="font-bold md:font-semibold text-3xl md:text-4xl text-gray-800">
                    Warum Deutsch mit Anita?
                </h1>
            </div>
            <div class="mx-auto max-w-7xl flex flex-wrap text-center justify-center gap-y-8">
                <div class="flex flex-col w-full lg:w-1/2 p-4 md:p-12 items-center">
                        <!-- <img src="/images/image1.png" class="w-20 h-20 mb-10"> -->
                        <NotebookPen class="w-20 h-20 mb-10 text-red-700" />
                    <h1 class="font-semibold md:font-bold text-2xl md:text-3xl text-gray-800 mb-6">Effektives Lernen</h1>
                    <p class="text-gray-700 md:text-xl">Lorem ipsum dolor sit amet consectetur. Orci tellus neque euismod 
                        urna amet ut odio eleifend. Id aliquet vivamus sem
                        Vom Hören übers Sprechen bis hin zum Lesen und Schreiben ermöglichen dir die Kurse eine systematische Vertiefung und Erweiterung deiner Deutschkenntnisse.
                    </p>
                </div>
                <div class="flex flex-col w-full lg:w-1/2 p-4 md:p-12 items-center">
                        <!-- <img src="/images/image1.png" class="w-20 h-20 mb-10"> -->
                        <!-- <Laptop  class="w-20 h-20 mb-10" /> -->
                        <MonitorSmartphone class="w-20 h-20 mb-10 text-red-700" />
                    <h1 class="font-semibold md:font-bold text-2xl md:text-3xl text-gray-800 mb-6">Flexibilität</h1>
                    <p class="text-gray-700 md:text-xl">Mit meinen Deutschkursen kannst du lernen, wann und wie lange du möchtest. Du kannst dir deine Lernzeit ganz individuell einteilen und flexibel auch neben Beruf, Studium und Familie, an deinem freien Tag, am frühen Morgen oder am Wochenende Deutsch lernen.</p>
                </div>
                <div class="flex flex-col w-full lg:w-1/2 p-4 md:p-12 items-center">
                        <!-- <img src="/images/image1.png" class="w-20 h-20 mb-10"> -->
                        <Handshake  class="w-20 h-20 mb-10 text-red-700" />
                    <h1 class="font-semibold md:font-bold text-2xl md:text-3xl text-gray-800 mb-6">Individuelle Betreuung</h1>
                    <p class="text-gray-700 md:text-xl">Lorem ipsum dolor sit amet consectetur. Orci tellus neque euismod 
                        urna amet ut odio eleifend. Id aliquet vivamus sem.</p>
                </div>
            </div>
        </section>

        <section class="mx-auto max-w-7xl mb-24">
            <div class="mb-6 md:mb-10 px-6"> 
                <h1 class="font-semibold text-3xl md:text-4xl text-center">
                    Vorteile meiner Kurse
                </h1>
            </div>
            <div class="grid grid-cols-5">
                <div class="col-span-5 md:col-span-2 px-6 h-[350px] md:h-full mb-10">
                    <img src="/images/WhatsApp2-removebg.png" class="w-full h-full object-contain">
                </div>

                <div class="col-span-5 md:col-span-3 flex flex-col justify-center">
                    
                    <div class="p-4 border-b">
                        <h1 class="text-2xl md:text-3xl font-semibold text-gray-800">1. Persönlicher Lernansatz</h1>
                        <div class="mt-4">
                            <!-- <p class="col-span-1 font-semibold text-md text-gray-400 items-end">Step 01</p> -->
                            <p class="col-span-5 md:col-span-4 md:text-lg text-gray-600">
                                Ich weiß aus eigener Erfahrung, wie herausfordernd es sein kann, eine neue Sprache zu lernen. 
                                    Deshalb biete ich dir einen individuellen Ansatz, bei dem du im Mittelpunkt stehst.
                                        Du bekommst die Unterstützung, die du brauchst, um dich in deinem eigenen Tempo zu entwickeln und dein Ziel zu erreichen.
                            </p> 
                        </div>
                    </div>
                    <div class="p-4 border-b">
                        <h1 class="text-2xl md:text-3xl font-semibold text-gray-800">2. Klare und einfache Lernstruktur</h1>
                        <div class="mt-4">
                            <!-- <p class="col-span-1 font-semibold text-md text-gray-400">Step 02</p> -->
                            <p class="col-span-5 md:col-span-4 md:text-lg text-gray-600">
                                In meinen Kursen lernst du Schritt für Schritt. Wir beginnen mit den Grundlagen, 
                                    sodass du die Sprache richtig aufbauen kannst. Du wirst keine Themen überspringen und bekommst die Zeit,
                                        die du brauchst, um alles zu verstehen.
                            </p> 
                        </div>
                    </div>
                    <div class="p-4 border-b">
                        <h1 class="text-2xl md:text-3xl font-semibold text-gray-800">3. Praxisorientiertes Lernen</h1>
                        <div class="grid grid-cols-5 mt-4">
                            <!-- <p class="col-span-1 font-semibold text-md text-gray-400 items-end">Step 03</p> -->
                            <p class="col-span-5 md:col-span-4 md:text-lg text-gray-600">
                                Sprache wird am besten durch Übung und Anwendung gelernt. 
                                    In meinen Kursen wirst du viel sprechen, hören und üben. 
                                        Ich gebe dir die Werkzeuge, um Deutsch im Alltag zu verwenden und es wirklich zu verstehen.
                            </p> 
                        </div>
                    </div>
                    <div class="p-4 border-b">
                        <h1 class="text-2xl md:text-3xl font-semibold text-gray-800">4. Eine unterstützende und sichere Umgebung</h1>
                        <div class="grid grid-cols-5 mt-4">
                            <!-- <p class="col-span-1 font-semibold text-md text-gray-400 items-end">Step 03</p> -->
                            <p class="col-span-5 md:col-span-4 md:text-lg text-gray-600">
                                Ich schaffe eine Atmosphäre, in der du dich sicher fühlst.
                                    Du kannst Fehler machen und wirst immer ermutigt, weiter zu lernen. 
                                        Dein Erfolg ist meine Priorität, und ich begleite dich auf jedem Schritt deines Weges.
                            </p> 
                        </div>
                    </div>
                    <div class="p-4 border-b">
                        <h1 class="text-2xl md:text-3xl font-semibold text-gray-800">5. Flexibilität ohne Druck</h1>
                        <div class="grid grid-cols-5 mt-4">
                            <!-- <p class="col-span-1 font-semibold text-md text-gray-400 items-end">Step 03</p> -->
                            <p class="col-span-5 md:col-span-4 md:text-lg text-gray-600">
                                Ob du in der Gruppe oder im Einzelunterricht bist, du wirst immer die Unterstützung bekommen,
                                    die du brauchst. Bei mir gibt es keinen Druck, sondern die Freiheit, 
                                        in deinem eigenen Tempo zu lernen, ohne sich überfordert zu fühlen.
                            </p> 
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <faq />

        <section class="mb-12">
            <div class="px-6 py-24 container mx-auto max-w-7xl">
                <h1 class="text-4xl font-semibold md:text-7xl text-black md:w-3/4">
                    Let's work together. Get in touch.
                </h1>
                <div class="border-t border-gray-600 w-full my-12"></div>
                <div class="grid grid-cols-1 md:grid-cols-2 w-full items-center justify-between gap-8">
                    <div class="flex flex-col sm:flex-row gap-4 col-span-1 order-2 md:order-1">
                        <router-link to="/uber-mich" class="rounded-lg bg-red-700 border px-8 py-3 md:py-4 text-white transition hover:bg-black text-center inline-block">
                            Über mich 
                        </router-link>
                        <a href="https://www.instagram.com/gjermanisht.me.anita/" class="rounded-lg border border-black px-8 py-3 md:py-4 text-black hover:bg-black hover:text-white text-center inline-block">
                            Kontact Me →
                        </a>
                        <!-- <NuxtLink to="/uber-mich" type="button" aria-disabled="false"
                            class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-4 px-10 align-middle text-sm font-semibold leading-none bg-red-700 text-white hover:bg-red-950 h-[42px] min-w-[42px] gap-2">
                                Über mich
                        </NuxtLink> -->
                    </div>
                    <div class="col-span-1 order-1 md:order-2">
                        <p class="text-sm lg:text-lg opacity-75 text-black">
                            It is a pleasure to work with you, you are welcome to contact
                             me for any information you need and also to be your teacher.
                        </p> 
                        <div class="flex flex-col md:flex-row items-center w-full gap-4 text-black mt-4"> 
                            <p class="text-gray-700 font-semibold">Info@deutschmitanita.com</p>
                            <div class="flex gap-4 md:border-l border-gray-600 md:ml-4 md:pl-6">
                                <a href="https://www.instagram.com/gjermanisht.me.anita/" class="text-red-700 hover:text-black transition-colors duration-300"> 
                                    <Instagram class="w-12 h-12" />
                                </a>
                                <a href="#" class="text-red-700 hover:text-black transition-colors duration-300"> 
                                    <Youtube class="w-14 h-14" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        

    </div>
</template>

<script setup>
    import { Instagram, Youtube, NotebookPen, Laptop, MonitorSmartphone, Handshake } from 'lucide-vue-next'
</script>
<template>
  <div>
    <section class="grid grid-cols-1 md:grid-cols-2 items-center mt-4 gap-4 mx-auto max-w-7xl">
      <div class="w-full h-[350px] md:h-[600px] order-2 md:order-1">
        <img src="/images/WhatsApp1-removebg.png" class="w-full h-full object-contain" />
      </div>
      <div class="flex flex-col text-center md:text-start p-10 order-1 md:order-2">
        <h1 class="font-bold text-3xl md:text-5xl mb-8">
          Dein Start in die deutsche Sprache
        </h1>
        <p class="text-gray-700 md:text-xl mb-12">
          Möchtest du Deutsch lernen? Super! Dann bist du hier genau richtig.
          Ich helfe dir dabei, die Sprache mit einfachen Übungen und viel
          Unterstützung schnell zu verbessern. Trau dich - ich helfe dir dabei!
        </p>
        <div>
          <router-link to="/uber-mich"
            class="w-full md:w-auto rounded-lg bg-red-700 px-8 py-3 md:py-4 text-white transition hover:bg-black text-center inline-block text-md" >
            Über mich
          </router-link>
        </div>
      </div>
    </section>

    <section class="mb-12 py-24 bg-gray-50">
      <div class="flex justify-center text-center mb-12 px-4">
        <h1 class="font-bold md:font-semibold text-3xl md:text-4xl text-gray-800" >
          Warum Deutsch mit Anita?
        </h1>
      </div>
      <div class="mx-auto max-w-7xl flex flex-wrap text-center justify-center gap-y-8" >
        <div class="flex flex-col w-full lg:w-1/2 p-4 md:p-12 items-center">
          <!-- <img src="/images/image1.png" class="w-20 h-20 mb-10"> -->
          <NotebookPen class="w-16 h-16 mb-10 text-red-700" />
          <!-- <h1 class="font-semibold md:font-bold text-2xl md:text-3xl text-gray-800 mb-6">Effektives Lernen</h1> -->
          <h1 class="font-semibold md:font-bold text-2xl md:text-3xl text-gray-800 mb-6" >
            Lerne effektiv und mit Erfolg
          </h1>
          <p class="text-gray-700 md:text-xl">
            Ich helfe dir, Deutsch schnell und einfach zu lernen. Mein
            Unterricht ist klar strukturiert, sodass du jedes Thema gut
            verstehst. Du bekommst alle Werkzeuge, die du brauchst, um schnell
            Fortschritte zu machen, und kannst das Gelernte sofort im Alltag
            anwenden.
          </p>
        </div>
        <div class="flex flex-col w-full lg:w-1/2 p-4 md:p-12 items-center">
          <!-- <img src="/images/image1.png" class="w-20 h-20 mb-10"> -->
          <!-- <Laptop  class="w-20 h-20 mb-10" /> -->
          <BookOpen class="w-16 h-16 mb-10 text-red-700" />
          <!-- <h1 class="font-semibold md:font-bold text-2xl md:text-3xl text-gray-800 mb-6">Flexibilität</h1> -->
          <h1 class="font-semibold md:font-bold text-2xl md:text-3xl text-gray-800 mb-6" >
            Aktive Anwendung im Unterricht
          </h1>
          <p class="text-gray-700 md:text-xl">
            Sprache lernt man nicht nur durch Zuhören, sondern auch durch
            Sprechen und Üben. In meinen Kursen wirst du aktiv üben, mit
            einfachen Gesprächen und praktischen Übungen. So wirst du schnell
            sicherer im Sprechen und Verstehen von Deutsch.
          </p>
        </div>
        <div class="flex flex-col w-full lg:w-1/2 p-4 md:p-12 items-center">
          <!-- <img src="/images/image1.png" class="w-20 h-20 mb-10"> -->
          <Handshake class="w-16 h-16 mb-10 text-red-700" />
          <!-- <h1 class="font-semibold md:font-bold text-2xl md:text-3xl text-gray-800 mb-6">Individuelle Betreuung</h1> -->
          <h1
            class="font-semibold md:font-bold text-2xl md:text-3xl text-gray-800 mb-6"
          >
            Persönliche Betreuung und Unterstützung für alle
          </h1>
          <p class="text-gray-700 md:text-xl">
            In meinen Kursen - ob in der Gruppe oder im 1:1-Unterricht -
            erhältst du immer persönliche Unterstützung. Jeder Teilnehmer, egal
            ob in einem Gruppenkurs oder im Einzelunterricht, kann sich mit
            Fragen an mich wenden und bekommt gezielte Hilfe. Dein Erfolg ist
            mir wichtig, und ich stehe dir jederzeit mit Rat und Tat zur Seite.
          </p>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl mb-24">
      <div class="mb-6 md:mb-10 px-6">
        <h1 class="font-semibold text-3xl md:text-4xl text-center">
          Vorteile meiner Kurse
        </h1>
      </div>
      <div class="grid grid-cols-5 gap-6 items-center">
        <!-- Foto -->
        <div class="col-span-5 md:col-span-2 px-6 h-[350px] max-h-[500px] md:h-full flex items-center justify-center" >
          <img src="/images/WhatsApp2-removebg.png" class="w-full h-full object-contain" />
        </div>

        <!-- 3 tekste anash fotos -->
        <div class="col-span-5 md:col-span-3 flex flex-col justify-center space-y-6" >
          <div class="p-4 border-b">
            <h1 class="text-2xl md:text-3xl font-semibold text-gray-800">
              Persönlicher Lernansatz
            </h1>
            <p class="mt-4 md:text-lg text-gray-600">
              Ich weiß aus eigener Erfahrung, wie herausfordernd es sein kann,
              eine neue Sprache zu lernen. Deshalb biete ich dir einen
              individuellen Ansatz, bei dem du im Mittelpunkt stehst.
            </p>
          </div>
          <div class="p-4 border-b">
            <h1 class="text-2xl md:text-3xl font-semibold text-gray-800">
              Klare und einfache Lernstruktur
            </h1>
            <p class="mt-4 md:text-lg text-gray-600">
              In meinen Kursen lernst du Schritt für Schritt. Wir beginnen mit
              den Grundlagen, sodass du die Sprache richtig aufbauen kannst.
            </p>
          </div>
          <div class="p-4 border-b">
            <h1 class="text-2xl md:text-3xl font-semibold text-gray-800">
              Praxisorientiertes Lernen
            </h1>
            <p class="mt-4 md:text-lg text-gray-600">
              Sprache wird am besten durch Übung und Anwendung gelernt. In
              meinen Kursen wirst du viel sprechen, hören und üben.
            </p>
          </div>
          <div class="p-4">
            <h1 class="text-2xl md:text-3xl font-semibold text-gray-800">
              Eine unterstützende und sichere Umgebung
            </h1>
            <p class="mt-4 md:text-lg text-gray-600">
              Ich schaffe eine Atmosphäre, in der du dich sicher fühlst. Du
              kannst Fehler machen und wirst immer ermutigt, weiter zu lernen.
            </p>
          </div>
        </div>

        <!-- Teksti poshtë fotos -->

        <!-- Teksti poshtë 3 teksteve të para -->
        <!-- <div class="col-span-5 md:col-span-3 p-4">
                <h1 class="text-2xl md:text-3xl font-semibold text-gray-800">Flexibilität ohne Druck</h1>
                <p class="mt-4 md:text-lg text-gray-600">
                    Ob du in der Gruppe oder im Einzelunterricht bist, du wirst immer die Unterstützung bekommen,
                    die du brauchst. Bei mir gibt es keinen Druck, sondern die Freiheit, 
                    in deinem eigenen Tempo zu lernen.
                </p>
            </div> -->
      </div>
    </section>

    <faq />

    <section class="mb-12">
      <div class="px-6 py-24 container mx-auto max-w-7xl">
        <h1 class="text-4xl font-semibold md:text-6xl text-black md:w-3/4 text-center md:text-start" >
          Lass uns zusammenarbeiten. Nimm Kontakt auf.
        </h1>
        <div class="border-t border-gray-600 w-full my-12"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 w-full items-center justify-between gap-8" >
          <div class="flex flex-col sm:flex-row gap-4 col-span-1 order-2 md:order-1" >
            <router-link to="/uber-mich"
              class="rounded-lg bg-red-700 border px-8 py-3 md:py-4 text-white transition hover:bg-black text-center inline-block" >
              Über mich
            </router-link>
            <button @click="redirectToWhatsApp"
              class="rounded-lg border border-black px-8 py-3 md:py-4 text-black hover:bg-black hover:text-white text-center inline-block" >
                Kontaktiere mich →
            </button>
          </div>
          <div class="col-span-1 order-1 md:order-2">
            <p class="text-sm lg:text-lg opacity-75 text-black text-center md:text-start">
              Es ist mir eine Freude, mit Ihnen zu arbeiten. Sie können mich
              gerne kontaktieren, wenn Sie Informationen benötigen.
            </p>
            <div class="flex flex-col md:flex-row items-center w-full gap-4 text-black mt-4" >
              <p class="text-gray-700 font-semibold">
                <a href="mailto:deutschmitanita@outlook.com">
                  deutschmitanita@outlook.com
                </a>
              </p>
              <div class="flex gap-4 md:border-l border-gray-600 md:ml-4 md:pl-6">
                <a
                  href="https://www.instagram.com/deutsch.mit.anita/"
                  class="text-red-700 hover:text-black transition-colors duration-300">
                  <Instagram class="w-12 h-12" />
                </a>
                <a class="text-red-700 transition-colors duration-300">
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
  import {
    Instagram,
    Youtube,
    NotebookPen,
    Laptop,
    MonitorSmartphone,
    Handshake,
    BookOpen,
  } from "lucide-vue-next";

  const redirectToWhatsApp = () => {
    const phoneNumber = "+436607094063";
    const message = encodeURIComponent(
      "Ich möchte mehr über die Deutschkurse wissen."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };
</script>

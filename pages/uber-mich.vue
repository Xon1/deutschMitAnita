<template>
  <div>
    <section class="flex justify-center items-center px-4 md:px-12 mb-24 mt-24">
        <div class="flex flex-col md:flex-row mx-auto max-w-7xl gap-10">
            <div class="max-w-[400px] md:w-full items-center">
                <img src="/images/WhatsApp1-removebg.png" alt="Person working on a design" class="object-contain" />
            </div>
            <div class="content max-w-xl flex flex-col justify-center">
                <h1 class="text-4xl font-bold mb-6">ABOUT ME</h1>
                <div class="px-6">
                    <p class="text-base leading-7 text-gray-700 mb-4">
                        Ich bin Anita, Sprachtrainerin, und es macht mich glücklich, 
                        anderen Menschen zu helfen, Deutsch zu lernen. Der Weg dorthin war aber nicht immer einfach.
                    </p>
                    <p class="text-base leading-7 text-gray-700 mb-6">
                        Ich bin in Kosovo geboren und aufgewachsen.
                        Schon immer hutte ich Interesse an Sprachen.
                        Deshalb habe ich mich entschieden, etwas zu machen, das mit Sprachen zu tun hat
                    </p>
                    <p class="text-base leading-7 text-gray-700 mb-4">
                        Mit 20 Jahren bin ich nach österreich gekommen, ich konnte kein Deutsch und verstand anfangs fast nichts.
                        Die Sprache war für mich sehr schwierig, aber ich wollte sie unbeeingt lernen,
                        Also habe ich jeden Tag geübt unc Schritt für Schritt wurde es besser.
                    </p>
                    <p class="text-base leading-7 text-gray-700 mb-4">
                        2023 habe ich meine Ausbildung in " Deutsch als Fremdsprache " (DaF/Daz) gemacht.
                        Heute unterstütze ich Menschen, die Deutsch lernen möchten - einfach, klar und Schritt für Schritt.
                        Ich weip, wie schwer es ist, eine neue Sprache zu lernen, und deshalb bin ich hier, um dir zu helfen!
                    </p>
                    <h1 class="text-lg font-semibold text-gray-700 mb-6">Dein Lehrer, Anita Kryeziu</h1>
                    <!-- <div class="flex gap-4">
                        <a href="#" class="text-gray-700 text-xl hover:text-red-700">
                            <Instagram class="h-7 w-7 mr-2" />
                        </a>
                        <a href="#" class="text-gray-700 text-xl hover:text-red-700">
                            <Youtube class="h-8 w-8 mr-2" />
                        </a>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
    <section>
      <div class="flex flex-col items-center px-6 mb-24">

        <h1 class="text-3xl font-bold text-gray-800 mb-8">Meine Kurse</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
          <!-- Grammatikkurs -->
          <div class="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold text-center mb-6 text-gray-800">Grammatikkurs</h2>
            <ul class="space-y-4 text-gray-700">
              <li>
                <span class="font-medium">Für wen:</span> Anfänger, die die Grundlagen der deutschen Grammatik lernen möchten
              </li>
              <li>
                <span class="font-medium">Was machen wir:</span>
                <ul class="list-disc list-inside ml-4 mt-2 space-y-2">
                  <li>Sätze bilden</li>
                  <li>Wichtige Grammatikregeln (z. B. Artikel, Verben, Satzbau)</li>
                  <li>Übungen zum Schreiben und Sprechen</li>
                </ul>
              </li>
              <li>
                <span class="font-medium">Kursdauer:</span> 6-8 Wochen (3 Stunden pro Woche in der Gruppe)
              </li>
              <li>
                <span class="font-medium">Gruppengröße:</span> Max. 6 Personen
              </li>
              <li>
                <span class="font-medium">Was du bekommst:</span>
                <ul class="list-disc list-inside ml-4 mt-2 space-y-2">
                  <li>Materialien zum Lernen</li>
                  <li>Übungen für zu Hause</li>
                  <li>Meine Unterstützung, auch außerhalb des Kurses</li>
                </ul>
              </li>
            </ul>
          </div>

          <!-- 1:1 Kurse für Frauen -->
          <div class="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold text-center mb-6 text-gray-800">1:1 Kurse für Frauen</h2>
            <ul class="space-y-4 text-gray-700">
              <li>
                <span class="font-medium">Für wen:</span> Frauen, die individuell und in ihrem eigenen Tempo lernen möchten
              </li>
              <li>
                <span class="font-medium">Was machen wir:</span>
                <ul class="list-disc list-inside ml-4 mt-2 space-y-2">
                  <li>Themen, die dir wichtig sind (z. B. Alltag, Arbeit, Grammatik)</li>
                  <li>Viel sprechen und üben</li>
                  <li>Individuelle Übungen und Tipps</li>
                </ul>
              </li>
              <li>
                <span class="font-medium">Kursdauer:</span> Flexibel – Termine nach Absprache
              </li>
              <li>
                <span class="font-medium">Was du bekommst:</span>
                <ul class="list-disc list-inside ml-4 mt-2 space-y-2">
                  <li>Persönliche Betreuung</li>
                  <li>Übungen nur für dich</li>
                  <li>Unterstützung bei deinen Fragen</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
    import { Instagram, Youtube } from 'lucide-vue-next';
</script>
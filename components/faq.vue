<template>
  <div class="bg-gray-50 py-24">
    <div class="mx-auto max-w-7xl px-6">
      <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center">Häufig gestellte Fragen</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item border-b border-gray-200 py-4">
        <button @click="toggleAnswer(index)" class="flex justify-between items-center w-full text-left md:text-xl font-bold sm:font-semibold text-color focus:outline-none transition-transform">
          {{ faq.question }}
          <svg v-if="faq.isOpen" class="w-6 h-6 transform rotate-180 transition-transform text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
          <svg v-else class="min-w-6 h-6 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <transition name="fade" mode="out-in">
          <p v-if="faq.isOpen" class="mt-2 text-color" v-html="faq.answer"></p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const faqs = ref([
  { question: '1. Muss ich schon Deutsch können, um mit dem Kurs zu starten?', answer: 'Nein, du brauchst keine perfekten Deutschkenntnisse. Mein Grammatikkurs ist für alle, die die Grundlagen der deutschen Grammatik lernen oder wiederholen möchten. Wenn du schon einen A1-Kurs gemacht hast oder gerade auf A2- oder B1-Niveau bist, ist dieser Kurs ideal für dich.', isOpen: false },
  { question: '2. Wie lange dauert der Einzelunterricht für Frauen?', answer: 'Der Einzelunterricht für Frauen ist flexibel. Jede Unterrichtseinheit dauert 60 Minuten, und du kannst die Dauer nach deinen Wünschen anpassen.', isOpen: false },
  { question: '3. Muss ich ein spezielles Buch für den Kurs kaufen?', answer: 'Nein, du musst kein spezielles Buch kaufen. Ich stelle alle Materialien zur Verfügung. Du kannst jedoch ein Notizbuch verwenden, um dir wichtige Informationen aufzuschreiben.', isOpen: false },
  { question: '4. Wie kann ich den Kurs bezahlen?', answer: 'Du kannst den Kurs per Überweisung bezahlen. Ich schicke dir die Zahlungsinformationen, nachdem du dich für den Kurs angemeldet hast.', isOpen: false },
  { question: '5. Wie lange dauert der Grammatikkurs?', answer: 'Der Grammatikkurs dauert 5-6 Wochen und findet zweimal pro Woche statt.', isOpen: false }
]);

const toggleAnswer = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};
</script>

<style scoped>
.faq-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

button:focus {
  outline: none;
}

.custom-green {
  color: #BCD424;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

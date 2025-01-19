<template>
    <div>
      <div class="faq-container pb-16 px-6">
        <!-- <h3 class="text-lg sm:text-xl font-semibold custom-green mb-3 ">Hilfreiche Information</h3> -->
        <h2 class="text-2xl md:text-3xl font-bold mb-8 text-color">Frequently asked questions</h2>
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item border-b border-gray-200 py-4">
          <button @click="toggleAnswer(index)" class="flex justify-between items-center w-full text-left sm:text-xl font-bold sm:font-semibold text-color focus:outline-none transition-transform">
            {{ faq.question }}
            <svg v-if="faq.isOpen" class="w-6 h-6 transform rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
           
            <svg v-else class="min-w-6 h-6 transform transition-transform " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <p v-show="faq.isOpen" class="mt-2 text-color transition-opacity duration-300" v-html="faq.answer"></p>
        </div>
      </div>
     </div>
    </template>
   
    <script setup>
    // import '@/assets/css/custom.css';
  
    import { ref } from 'vue';
   
    const faqs = ref([
      { question: 'Wie lange dauert es, bis ich einen Termin bekomme?', answer: 'In der Regel sichern wir Ihnen innerhalb weniger Tage einen Termin, abhängig von der Verfügbarkeit.', isOpen: false },
      { question: 'Welche Dokumente benötige ich für den Termin?', answer: 'Sie erhalten eine Liste der benötigten Dokumente von unseren Experten nach der Kontaktaufnahme.', isOpen: false },
      { question: 'Wie hoch sind die Kosten für Ihren Service?', answer: 'Unsere Gebühren variieren je nach Dringlichkeit und Art der Aufenthaltsgenehmigung. Kontaktieren Sie uns für ein individuelles Angebot.', isOpen: false },
      { question: 'Was passiert, wenn ich den Termin nicht wahrnehmen kann?', answer: 'Bitte informieren Sie uns so schnell wie möglich, damit wir einen neuen Termin für Sie vereinbaren können.', isOpen: false },
      { question: 'Warum sollte ich Ihren Service nutzen, wenn es ein kostenloses Terminierungstool gibt?', answer: 'Unser Service garantiert Ihnen einen Termin, selbst wenn die regulären Slots ausgebucht sind. So vermeiden Sie lange Wartezeiten und unsichere Situationen.', isOpen: false }
      // Add more FAQs as needed
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
   
    </style>
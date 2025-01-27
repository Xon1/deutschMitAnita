<template>
    <div class="bg-gray-50 py-24">
      <div class="mx-auto max-w-7xl px-6">
        <!-- <h3 class="text-lg sm:text-xl font-semibold custom-green mb-3 ">Hilfreiche Information</h3> -->
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently asked questions</h2>
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item border-b border-gray-200 py-4">
          <button @click="toggleAnswer(index)" class="flex justify-between items-center w-full text-left md:text-xl font-bold sm:font-semibold text-color focus:outline-none transition-transform">
            {{ faq.question }}
            <svg v-if="faq.isOpen" class="w-6 h-6 transform rotate-180 transition-transform text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
           
            <svg v-else class="min-w-6 h-6 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
      { question: '1. Muss ich schon Deutsch können, um mit dem Kurs zu starten?', answer: 'Nein, du brauchst keine Vorkenntnisse. Mein Grammatikkurs für Anfänger ist für absolute Anfänger. Wir fangen bei Null an und gehen Schritt für Schritt vor.', isOpen: false },
      { question: '2. Wie lange dauert der Kurs?', answer: 'Der Grammatikkurs für Anfänger dauert ca. 6-8 Wochen, je nachdem, wie schnell du lernen möchtest. Jede Stunde ist 60 Minuten lang. Der 1:1-Kurs ist flexibel und du kannst die Dauer selbst wählen.', isOpen: false },
      { question: '3. Muss ich ein spezielles Buch für den Kurs kaufen?', answer: 'Nein, du musst kein spezielles Buch kaufen. Ich stelle alle Materialien zur Verfügung. Du kannst jedoch ein Notizbuch verwenden, um dir wichtige Informationen aufzuschreiben.', isOpen: false },
      { question: '4.Wie kann ich den Kurs bezahlen?', answer: 'Du kannst den Kurs per Überweisung oder PayPal bezahlen. Ich schicke dir die Zahlungsinformationen, nachdem du dich für den Kurs angemeldet hast.', isOpen: false },
      { question: '5. Was lerne ich im Grammatikkurs?', answer: 'Im Grammatikkurs  lernst du die Grundlagen der deutschen Sprache: wie man einfache Sätze bildet, Fragen stellt und auf alltägliche Situationen reagiert.', isOpen: false }
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
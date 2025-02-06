<template>
  <div class="container mx-auto p-6 max-w-3xl">
    <div class="flex justify-end mb-4">
      <NuxtLink
        to="/"
        class="hover:bg-red-600 w-8 h-8 flex justify-center items-center"
      >
        ✕
      </NuxtLink>
    </div>

    <h1 class="text-3xl font-bold text-center mb-6">Impressum</h1>

    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Unternehmensinformationen</h2>
      <p class="text-gray-700">
        "Anita Kryeziu"<br />
        "Deutsch Lernen mit Anita"<br />
        "Hauptstraße 12"<br />
        "10115 Berlin, Deutschland"
      </p>
    </div>

    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Kontakt</h2>
      <p class="text-gray-700">
        <strong>E-Mail:</strong>
        <a
          href="mailto:deutchmitanita@gmail.com"
          class="text-blue-600 hover:underline"
          > deutchmitanita@gmail.com</a
        ><br />
        <strong>Telefon:</strong> +49 123 456789
      </p>
    </div>

    <!-- <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Steuerliche Angaben</h2>
      <p class="text-gray-700">
        Kleinunternehmen nach steuerlichen Vorschriften<br />" USt-IdNr.:
        DE123456789 " 
      </p>
    </div> -->

    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Verantwortlich für den Inhalt</h2>
      <p class="text-gray-700">
        Anita Kryeziu<br />
        Hauptstraße 12<br />
        10115 Berlin, Deutschland
      </p>
    </div>

    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Haftungsausschluss</h2>
      <h3 class="text-lg font-medium">Inhalte der Webseite</h3>
      <p class="text-gray-700">
        Die Inhalte dieser Webseite wurden mit großer Sorgfalt und Hingabe
        erstellt, um wertvolle Informationen und Unterstützung für das Erlernen
        der deutschen Sprache zu bieten. Dennoch können wir nicht für die
        absolute Richtigkeit, Vollständigkeit oder Aktualität aller
        bereitgestellten Materialien garantieren. Die Nutzung dieser Materialien
        erfolgt auf eigenes Risiko, und wir empfehlen, sie als unterstützende
        Ressource für Ihr Sprachstudium zu verwenden.
      </p>

      <h3 class="text-lg font-medium mt-2">Externe Links</h3>

      <p class="text-gray-700">
        Diese Webseite kann Links zu externen Quellen enthalten, für deren
        Inhalte wir keine Verantwortung übernehmen. Die Verantwortung für die
        Inhalte dieser externen Webseiten liegt ausschließlich bei deren
        Betreibern, und wir haben keinen Einfluss auf deren Genauigkeit oder
        Inhalt. Wir bitten Sie, diese Seiten mit Vorsicht zu besuchen.
      </p>

      <h3 class="text-lg font-medium mt-2">Haftung für Lerninhalte</h3>
      <p class="text-gray-700">
        Ich, Anita Kryeziu, biete Unterstützung und Anleitung zum Erlernen der
        deutschen Sprache durch meine Kurse und Materialien. Allerdings
        übernehme ich keine Verantwortung für etwaige Misserfolge einzelner
        Lernender im Sprachprozess, da der Fortschritt von dem Engagement, der
        Zeit und den Anstrengungen abhängt, die jeder Lernende in seinen
        Lernprozess investiert.
      </p>
    </div>

    <div class="mb-6">
      <h2 class="text-xl font-semibold">Datenschutz</h2>
      <p class="text-gray-700">
        Weitere Informationen zur Verarbeitung personenbezogener Daten finden
        Sie in unserer
        <a href="/privacy-policy" class="text-blue-600 hover:underline"
          >Datenschutzerklärung</a
        >.
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "landing",
});
</script>

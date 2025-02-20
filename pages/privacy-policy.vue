<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <div class="flex justify-end mb-4">
      <NuxtLink
        to="/"
        class="hover:bg-red-600 w-8 h-8 flex justify-center items-center"
      >
        ✕
      </NuxtLink>
    </div>
    <h1 class="text-3xl font-bold text-center mb-6">Datenschutzerklärung</h1>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">1. Einleitung</h2>
      <p class="text-gray-600">
        Diese Datenschutzerklärung beschreibt, wie wir Ihre persönlichen Daten
        verarbeiten, wenn Sie diese Website besuchen. Wir nehmen Ihre
        Privatsphäre ernst und stellen sicher, dass Ihre Daten gemäß den
        Datenschutzbestimmungen verarbeitet werden.
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">2. Welche Daten sammeln wir?</h2>
      <p class="text-gray-600">
        Diese Website sammelt keine persönlichen Daten von Besuchern. Wir
        verwenden verschiedene Analysetools, um die Nutzung unserer Website zu
        überwachen und die Benutzererfahrung zu verbessern. Die gesammelten
        Daten sind anonym und beinhalten keine personenbezogenen Daten wie Namen
        oder Adressen.
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">
        3. Wie verwenden wir Ihre Daten?
      </h2>
      <p class="text-gray-600">
        Die gesammelten anonymen Daten werden ausschließlich verwendet, um die
        Leistung der Website zu überwachen und zu verbessern sowie die
        Benutzererfahrung zu optimieren. Diese Daten helfen uns, die Website
        schneller und benutzerfreundlicher zu gestalten.
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">
        4. Cookies und andere Tracking-Technologien
      </h2>
      <p class="text-gray-600">
        Diese Website verwendet Cookies und ähnliche Technologien, um die
        Website-Leistung zu verbessern und die Nutzung zu analysieren. Sie
        können Cookies in den Einstellungen Ihres Browsers deaktivieren, wenn
        Sie dies wünschen. Beachten Sie jedoch, dass dies die Benutzererfahrung
        beeinträchtigen könnte.
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">5. Rechte der Nutzer</h2>
      <p class="text-gray-600">
        Da wir keine personenbezogenen Daten sammeln, gibt es keine Anfragen für
        Zugriff, Änderung oder Löschung von Daten. Wenn Sie jedoch Fragen zu den
        gesammelten anonymen Daten haben oder Ihre Privatsphäre-Einstellungen
        anpassen möchten, können Sie uns jederzeit kontaktieren.
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">6. Datensicherheit</h2>
      <p class="text-gray-600">
        Auch wenn wir keine persönlichen Daten sammeln, stellen wir sicher, dass
        alle Inhalte auf dieser Website vor unbefugtem Zugriff geschützt sind.
        Wir setzen geeignete Sicherheitsmaßnahmen ein, um Ihre Daten zu
        schützen.
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">
        7. Änderungen dieser Datenschutzerklärung
      </h2>
      <p class="text-gray-600">
        Wir können diese Erklärung in Zukunft aktualisieren, und alle Änderungen
        werden auf dieser Seite veröffentlicht. Bitte besuchen Sie diese Seite
        regelmäßig, um auf dem neuesten Stand zu bleiben.
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">8. Kontakt</h2>
      <p class="text-gray-600">
        Wenn Sie Fragen zu dieser Datenschutzerklärung haben, können Sie uns
        unter folgender E-Mail-Adresse kontaktieren:
        <a href="mailto:deutschmitanita@outlook.com" class="text-blue-500"
          >deutschmitanita@outlook.com</a
        >
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">9. Links zu Drittplattformen</h2>
      <p class="text-gray-600">
        Diese Website enthält Links zu Drittplattformen wie Instagram und
        YouTube. Wir haben keinen Einfluss auf die Datenschutzrichtlinien dieser
        Plattformen und empfehlen Ihnen, deren Datenschutzrichtlinien zu prüfen,
        bevor Sie persönliche Daten teilen oder deren Dienste nutzen.
      </p>
    </section>

    <!-- Falenderim në fund -->
    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Vielen Dank!</h2>
      <p class="text-gray-600">
        Wir möchten uns herzlich bei Ihnen bedanken, dass Sie unsere Seite
        besucht haben. Wenn Sie Fragen haben, zögern Sie nicht, uns zu
        kontaktieren!
      </p>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "landing",
});
</script>

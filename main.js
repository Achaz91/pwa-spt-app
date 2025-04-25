// Enregistrement du service worker pour activer les fonctionnalités PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js')
      .then(function(registration) {
        console.log('ServiceWorker enregistré avec succès : ', registration.scope);
      })
      .catch(function(error) {
        console.log("L'enregistrement du ServiceWorker a échoué : ", error);
      });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  /* --- Objets de traductions --- */
  const texts = {
    fr: {
      pageTitle: "Calculateur SPT",
      languageLabel: "Langue :",
      rawDataLegend: "Données brutes SPT",
      n2Label: "N<sub>2</sub> (coups 15-30 cm) :",
      n3Label: "N<sub>3</sub> (coups 30-45 cm) :",
      initialCorrectionLegend: "Corrections initiales",
      hammerTypeLabel: "Type de marteau :",
      rodLengthLabel: "Longueur de la tige (m) :",
      boreDiameterLabel: "Diamètre de forage (mm) :",
      casingLabel: "Tubage présent",
      soilTypeLegend: "Type de sol",
      granularOption: "Granulaire",
      cohesiveOption: "Cohésif",
      granularLegend: "Paramètres pour sols granulaires",
      sigmaLabel: "Contrainte effective σ (kPa) :",
      cnModelLabel: "Modèle de CN :",
      waterTableLabel: "Profondeur de la nappe (Z, m) :",
      foundationDepthLabel: "Profondeur de la fondation (Df, m) :",
      foundationWidthLabel: "Largeur de la fondation (B, m) :",
      cohesiveLegend: "Paramètres pour sols cohésifs",
      kCoefficientLabel: "Coefficient k :",
      calculateButton: "Calculer",
      resultsTitle: "Résultats",
      nFieldResult: "N<sub>field</sub> (N<sub>2</sub> + N<sub>3</sub>) :",
      n60Result: "N<sub>60</sub> (Correction initiale) :",
      cnResult: "CN :",
      cwResult: "Cw :",
      n1Result: "N<sub>1</sub> (Correction avancée) :",
      qUltResult: "Capacité portante ultime q<sub>ult</sub> (kPa) :"
    },
    en: {
      pageTitle: "SPT Calculator",
      languageLabel: "Language:",
      rawDataLegend: "Raw SPT Data",
      n2Label: "N<sub>2</sub> (blows 15-30 cm):",
      n3Label: "N<sub>3</sub> (blows 30-45 cm):",
      initialCorrectionLegend: "Initial Corrections",
      hammerTypeLabel: "Hammer Type:",
      rodLengthLabel: "Rod Length (m):",
      boreDiameterLabel: "Borehole Diameter (mm):",
      casingLabel: "Casing Present",
      soilTypeLegend: "Soil Type",
      granularOption: "Granular",
      cohesiveOption: "Cohesive",
      granularLegend: "Parameters for Granular Soils",
      sigmaLabel: "Effective Stress σ (kPa):",
      cnModelLabel: "CN Model:",
      waterTableLabel: "Water Table Depth (Z, m):",
      foundationDepthLabel: "Foundation Depth (Df, m):",
      foundationWidthLabel: "Foundation Width (B, m):",
      cohesiveLegend: "Parameters for Cohesive Soils",
      kCoefficientLabel: "Coefficient k:",
      calculateButton: "Calculate",
      resultsTitle: "Results",
      nFieldResult: "N<sub>field</sub> (N<sub>2</sub> + N<sub>3</sub>):",
      n60Result: "N<sub>60</sub> (Initial Correction):",
      cnResult: "CN:",
      cwResult: "Cw:",
      n1Result: "N<sub>1</sub> (Advanced Correction):",
      qUltResult: "Ultimate Bearing Capacity q<sub>ult</sub> (kPa):"
    },
    es: {
      pageTitle: "Calculadora SPT",
      languageLabel: "Idioma:",
      rawDataLegend: "Datos Crudos SPT",
      n2Label: "N<sub>2</sub> (golpes 15-30 cm):",
      n3Label: "N<sub>3</sub> (golpes 30-45 cm):",
      initialCorrectionLegend: "Correcciones Iniciales",
      hammerTypeLabel: "Tipo de martillo:",
      rodLengthLabel: "Longitud de la varilla (m):",
      boreDiameterLabel: "Diámetro de perforación (mm):",
      casingLabel: "Tubaje Presente",
      soilTypeLegend: "Tipo de suelo",
      granularOption: "Granular",
      cohesiveOption: "Cohesivo",
      granularLegend: "Parámetros para suelos granulares",
      sigmaLabel: "Tensión efectiva σ (kPa):",
      cnModelLabel: "Modelo de CN:",
      waterTableLabel: "Profundidad de la pila (Z, m):",
      foundationDepthLabel: "Profundidad de la cimentación (Df, m):",
      foundationWidthLabel: "Ancho de la cimentación (B, m):",
      cohesiveLegend: "Parámetros para suelos cohesivos",
      kCoefficientLabel: "Coeficiente k:",
      calculateButton: "Calcular",
      resultsTitle: "Resultados",
      nFieldResult: "N<sub>field</sub> (N<sub>2</sub> + N<sub>3</sub>):",
      n60Result: "N<sub>60</sub> (Corrección inicial):",
      cnResult: "CN:",
      cwResult: "Cw:",
      n1Result: "N<sub>1</sub> (Corrección avanzada):",
      qUltResult: "Capacidad portante última q<sub>ult</sub> (kPa):"
    }
  };
  
  function updateLanguage(lang) {
    // Utilisation de innerHTML pour interpréter les balises <sub>
    document.getElementById('pageTitle').innerHTML = texts[lang].pageTitle;
    document.getElementById('languageLabel').innerHTML = texts[lang].languageLabel;
    document.getElementById('rawDataLegend').innerHTML = texts[lang].rawDataLegend;
    document.getElementById('n2Label').innerHTML = texts[lang].n2Label;
    document.getElementById('n3Label').innerHTML = texts[lang].n3Label;
    document.getElementById('initialCorrectionLegend').innerHTML = texts[lang].initialCorrectionLegend;
    document.getElementById('hammerTypeLabel').innerHTML = texts[lang].hammerTypeLabel;
    document.getElementById('rodLengthLabel').innerHTML = texts[lang].rodLengthLabel;
    document.getElementById('boreDiameterLabel').innerHTML = texts[lang].boreDiameterLabel;
    document.getElementById('casingText').innerHTML = texts[lang].casingLabel;
    document.getElementById('soilTypeLegend').innerHTML = texts[lang].soilTypeLegend;
    document.getElementById('granularOption').innerHTML = texts[lang].granularOption;
    document.getElementById('cohesiveOption').innerHTML = texts[lang].cohesiveOption;
    document.getElementById('granularLegend').innerHTML = texts[lang].granularLegend;
    document.getElementById('sigmaLabel').innerHTML = texts[lang].sigmaLabel;
    document.getElementById('cnModelLabel').innerHTML = texts[lang].cnModelLabel;
    document.getElementById('waterTableLabel').innerHTML = texts[lang].waterTableLabel;
    document.getElementById('foundationDepthLabel').innerHTML = texts[lang].foundationDepthLabel;
    document.getElementById('foundationWidthLabel').innerHTML = texts[lang].foundationWidthLabel;
    document.getElementById('cohesiveLegend').innerHTML = texts[lang].cohesiveLegend;
    document.getElementById('kCoefficientLabel').innerHTML = texts[lang].kCoefficientLabel;
    document.getElementById('calculateButton').innerHTML = texts[lang].calculateButton;
    document.getElementById('resultsTitle').innerHTML = texts[lang].resultsTitle;
  }
  
  // Écouteur sur le sélecteur de langue
  document.getElementById('langSelect').addEventListener('change', function() {
    updateLanguage(this.value);
  });
  // Mise à jour initiale avec la langue par défaut
  updateLanguage(document.getElementById('langSelect').value);
  
  // Affichage conditionnel selon le type de sol
  const soilTypeInputs = document.getElementsByName('soilType');
  soilTypeInputs.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.value === 'granular') {
        document.getElementById('granularFields').style.display = 'block';
        document.getElementById('cohesiveFields').style.display = 'none';
      } else {
        document.getElementById('granularFields').style.display = 'none';
        document.getElementById('cohesiveFields').style.display = 'block';
      }
    });
  });
  
  // Calcul et affichage des valeurs SPT
  function calculateSPT() {
    const n2 = parseFloat(document.getElementById('n2').value) || 0;
    const n3 = parseFloat(document.getElementById('n3').value) || 0;
    const N_field = n2 + n3;
    
    const hammerType = document.getElementById('hammerType').value;
    let Ce = 0.55;
    if (hammerType === 'donut') { Ce = 0.55; }
    else if (hammerType === 'safety') { Ce = 0.80; }
    else if (hammerType === 'automatic') { Ce = 0.90; }
    
    const rodLength = parseFloat(document.getElementById('rodLength').value) || 0;
    let Cr = 1;
    if (rodLength < 3) { Cr = 0.75; }
    else if (rodLength >= 3 && rodLength <= 4) { Cr = 0.85; }
    else if (rodLength > 4 && rodLength <= 6) { Cr = 0.95; }
    else if (rodLength > 6) { Cr = 1.00; }
    
    const boreDiameter = parseFloat(document.getElementById('boreDiameter').value) || 0;
    let Cb = 1.00;
    if (boreDiameter <= 115) { Cb = 1.00; }
    else if (boreDiameter === 150) { Cb = 1.05; }
    else if (boreDiameter === 200) { Cb = 1.15; }
    else { Cb = 1.00; }
    
    const casingPresent = document.getElementById('casing').checked;
    const Cs = casingPresent ? 1.00 : 1.20;
    
    const N60 = N_field * Ce * Cb * Cs * Cr;
    
    const currentLang = document.getElementById('langSelect').value;
    let outputHtml = "";
    outputHtml += `<p><strong>${texts[currentLang].nFieldResult}</strong> ${N_field.toFixed(2)}</p>`;
    outputHtml += `<p><strong>${texts[currentLang].n60Result}</strong> ${N60.toFixed(2)}</p>`;
    
    const soilType = document.querySelector('input[name="soilType"]:checked').value;
    if (soilType === 'granular') {
      const sigma = parseFloat(document.getElementById('sigma').value) || 0;
      const cnModel = document.getElementById('cnModel').value;
      let CN = 0;
      if (sigma > 0) {
        if (cnModel === 'liao') {
          CN = Math.sqrt(95.8 / sigma);
        } else if (cnModel === 'peck') {
          if (sigma > 24) { CN = 0.77 * Math.log10(1916 / sigma); }
          else { CN = Math.sqrt(95.8 / sigma); }
        }
        if (CN > 2) { CN = 2; }
      }
      const waterTable = parseFloat(document.getElementById('waterTable').value) || 0;
      const foundationDepth = parseFloat(document.getElementById('foundationDepth').value) || 0;
      const foundationWidth = parseFloat(document.getElementById('foundationWidth').value) || 0;
      let Cw = 1;
      if (waterTable < (foundationDepth + foundationWidth)) { Cw = waterTable / (foundationDepth + foundationWidth); }
      else { Cw = 1; }
      const N1 = CN * Cw * N60;
      const q_ult = 32 * N1 * foundationWidth;
      
      outputHtml += `<p><strong>${texts[currentLang].cnResult}</strong> ${CN.toFixed(2)}</p>`;
      outputHtml += `<p><strong>${texts[currentLang].cwResult}</strong> ${Cw.toFixed(2)}</p>`;
      outputHtml += `<p><strong>${texts[currentLang].n1Result}</strong> ${N1.toFixed(2)}</p>`;
      outputHtml += `<p><strong>${texts[currentLang].qUltResult}</strong> ${q_ult.toFixed(2)}</p>`;
    } else if (soilType === 'cohesive') {
      const kCoefficient = parseFloat(document.getElementById('kCoefficient').value) || 0;
      const q_ult = (kCoefficient * N_field) / 3;
      outputHtml += `<p><strong>${texts[currentLang].qUltResult}</strong> ${q_ult.toFixed(2)}</p>`;
    }
    document.getElementById('output').innerHTML = outputHtml;
  }
  
  document.getElementById('calculateButton').addEventListener('click', calculateSPT);
});

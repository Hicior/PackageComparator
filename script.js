"use strict";
/* ==========================================================================
   Package Data Configuration
   ========================================================================== */
const packagesData = {
  PRIME: [
    "Prowadzenie księgowości",
    "Nielimitowane konsultacje podatkowe",
    "Dostęp do platformy umożliwiającej przekazywanie dokumentów",
    "Dostęp do danych raportowych takich jak podatki, wynagrodzenia, ewidencja VAT",
    "Powiadomienia SMS o zbliżających się terminach płatności podatków itp.",
    "Wsparcie w kontrolach podatkowych",
    "Dostęp do wzorów umów",
    "Newsletter podatkowy",
    "Dostęp do webinarów",
    "Preferencyjna cena za pozostałe usługi Usługodawcy",
  ],
  "Mentzen+ IT Podstawowy": [
    "Nielimitowane konsultacje podatkowe",
    "Analiza podatkowa raz w roku kalendarzowym",
    "Wsparcie w procesie IP BOX",
    "Wniosek o wydanie interpretacji indywidualnej w zakresie ulgi IP BOX oraz zastosowanie stawek 12% oraz 8,5% ryczałtu",
    "Wsparcie w postępowaniach przed organami podatkowymi oraz sądami administracyjnymi, w tym przed Naczelnym Sądem Administracyjnym",
    "Wsparcie w kontrolach podatkowych",
    "Przygotowywanie bieżącej ewidencji na potrzeby rozliczenia ulgi IP Box",
    "Wnioski do GUS",
    "Zakładanie JDG",
    "Zakładanie spółek przez system S24",
    "Start z Mentzenem",
    "Prowadzenie księgowości",
    "Dostęp do platformy umożliwiającej przekazywanie dokumentów",
    "Dostęp do danych raportowych takich jak podatki, wynagrodzenia, ewidencja VAT",
    "Powiadomienia SMS o zbliżających się terminach płatności podatków itp.",
    "Uproszczony audyt KPIR",
    "Dostęp do szkoleń",
    "Dostęp do wzorów umów",
    "Newsletter podatkowy",
    "Dostęp do alertu podatkowego",
    "Dostęp do webinarów",
    "Opracowania do materiałów publikowanych na YouTube",
    "Preferencyjna cena za pozostałe usługi Usługodawcy",
  ],
  "Mentzen+ IT Ryczałt": [
    "Nielimitowane konsultacje podatkowe",
    "Analiza podatkowa raz w roku kalendarzowym",
    "Wsparcie w procesie IP BOX",
    "Wniosek o wydanie interpretacji indywidualnej w zakresie ulgi IP BOX oraz zastosowanie stawek 12% oraz 8,5% ryczałtu",
    "Wnioski do GUS",
    "Zakładanie JDG",
    "Zakładanie spółek przez system S24",
    "Start z Mentzenem",
    "Prowadzenie księgowości",
    "Dostęp do platformy umożliwiającej przekazywanie dokumentów",
    "Dostęp do danych raportowych takich jak podatki, wynagrodzenia, ewidencja VAT",
    "Powiadomienia SMS o zbliżających się terminach płatności podatków itp.",
    "Uproszczony audyt KPIR",
    "Dostęp do szkoleń",
    "Dostęp do wzorów umów",
    "Newsletter podatkowy",
    "Dostęp do alertu podatkowego",
    "Dostęp do webinarów",
    "Opracowania do materiałów publikowanych na YouTube",
    "Preferencyjna cena za pozostałe usługi Usługodawcy",
  ],
  "Mentzen+ IT Średni": [
    "Nielimitowane konsultacje podatkowe",
    "Analiza podatkowa raz w roku kalendarzowym",
    "Nielimitowane konsultacje prawne",
    "Wsparcie w procesie IP BOX",
    "Wniosek o wydanie interpretacji indywidualnej w zakresie ulgi IP BOX oraz zastosowanie stawek 12% oraz 8,5% ryczałtu",
    "Wsparcie w kontrolach podatkowych",
    "Wsparcie w postępowaniach przed organami podatkowymi oraz sądami administracyjnymi, w tym przed Naczelnym Sądem Administracyjnym",
    "Przygotowywanie bieżącej ewidencji na potrzeby rozliczenia ulgi IP Box",
    "Uproszczony audyt KPIR",
    "Wnioski do GUS",
    "Zakładanie JDG",
    "Zakładanie spółek przez system S24",
    "Start z Mentzenem",
    "Dostęp do szkoleń",
    "Dostęp do wzorów umów",
    "Newsletter podatkowy",
    "Dostęp do alertu podatkowego",
    "Dostęp do webinarów",
    "Opracowania do materiałów publikowanych na YouTube",
    "Preferencyjna cena za pozostałe usługi Usługodawcy",
  ],
  "Mentzen+ IT Premium": [
    "Nielimitowane konsultacje podatkowe",
    "Analiza podatkowa raz w roku kalendarzowym",
    "Nielimitowane konsultacje prawne",
    "Wsparcie w procesie IP BOX",
    "Wniosek o wydanie interpretacji indywidualnej w zakresie ulgi IP BOX oraz zastosowanie stawek 12% oraz 8,5% ryczałtu",
    "Wsparcie w kontrolach podatkowych",
    "Wsparcie w postępowaniach przed organami podatkowymi oraz sądami administracyjnymi, w tym przed Naczelnym Sądem Administracyjnym",
    "Przygotowywanie bieżącej ewidencji na potrzeby rozliczenia ulgi IP Box",
    "Uproszczony audyt KPIR",
    "Wnioski do GUS",
    "Zakładanie JDG",
    "Zakładanie spółek przez system S24",
    "Start z Mentzenem",
    "Dostęp do szkoleń",
    "Dostęp do wzorów umów handlowych",
    "Dostęp do wzorów umów",
    "Newsletter podatkowy",
    "Dostęp do wzorów regulaminów i OWU opracowanych przez Kancelarię",
    "Dostęp do alertu podatkowego",
    "Dostęp do webinarów",
    "Opracowania do materiałów publikowanych na YouTube",
    "Preferencyjna cena za pozostałe usługi Usługodawcy",
    "Dostęp do wzorów uchwał i innych dokumentów korporacyjnych opracowanych przez Kancelarię",
  ],
  "Mentzen+ Prawo i Podatki": [
    "Nielimitowane konsultacje podatkowe",
    "Nielimitowane konsultacje prawne",
    "Analiza podatkowa",
    "Przygotowanie wezwania do zapłaty raz w miesiącu",
    "Zakładanie JDG",
    "Zakładanie spółek przez system S24",
    "Wprowadzanie zmian do umów w systemie S24",
    "Uproszczony audyt ksiąg rachunkowych",
    "Uproszczony audyt KPIR",
    "Tematyczne, comiesięczne audyty prawne",
    "Dostęp do wzorów umów",
    "Dostęp do uchwał i krótkich pism",
    "Dostęp do szkoleń",
    "Dostęp do poradników prawnych",
    "Dostęp do bazy wiedzy",
    "Newsletter podatkowy",
    "Newsletter prawny",
    "Preferencyjna cena za pozostałe usługi Usługodawcy",
    "Po roku nieprzerwanej współpracy możliwość skorzystania z bezpłatnych usług prawnych",
    "Opracowania do materiałów publikowanych na YouTube",
  ],
  "Mentzen+ Prawo": [
    "Nielimitowane konsultacje prawne",
    "Przygotowanie raz w miesiącu wezwania do zapłaty",
    "Zakładanie spółek przez system S24",
    "Wprowadzanie zmian do umów w systemie S24",
    "Dostęp do wzorów umów",
    "Dostęp do uchwał i krótkich pism",
    "Dostęp do szkoleń",
    "Dostęp do poradników prawnych",
    "Newsletter prawny",
    "Tematyczne, comiesięczne audyty prawne",
    "Po roku nieprzerwanej współpracy możliwość skorzystania z bezpłatnych usług prawnych",
    "Preferencyjna cena za pozostałe usługi Usługodawcy",
  ],
  "Mentzen+ Podatki": [
    "Nielimitowane konsultacje podatkowe",
    "Analiza podatkowa",
    "Uproszczony audyt ksiąg rachunkowych",
    "Uproszczony audyt KPIR",
    "Zakładanie JDG",
    "Dostęp do szkoleń",
    "Newsletter podatkowy",
    "Dostęp do bazy wiedzy",
    "Preferencyjna cena za pozostałe usługi Usługodawcy",
  ],
};

/* ==========================================================================
   Feature Management
   ========================================================================== */
// Create a unique set of all features across packages
const allFeaturesSet = new Set();
Object.values(packagesData).forEach((currentPackage) => {
  currentPackage.forEach((feature) => allFeaturesSet.add(feature));
});
const allFeatures = Array.from(allFeaturesSet);

/* ==========================================================================
   DOM Elements
   ========================================================================== */
const packageSelect1 = document.getElementById("package1");
const packageSelect2 = document.getElementById("package2");
const comparisonBody = document.getElementById("comparisonBody");
const diffToggle = document.getElementById("diffToggle");

/* ==========================================================================
   Package Select Initialization
   ========================================================================== */
const packageNames = Object.keys(packagesData);

/**
 * Updates the target dropdown options by excluding the current selection in the source dropdown.
 * @param {HTMLSelectElement} sourceSelect - The dropdown whose selection is used as reference.
 * @param {HTMLSelectElement} targetSelect - The dropdown to be updated.
 * @param {boolean} skipValueUpdate - If true, skip setting the target's selected value.
 */
function updateDropdownOptions(sourceSelect, targetSelect, skipValueUpdate = false) {
  const selectedValue = sourceSelect.value;
  const currentTargetValue = targetSelect.value;

  // Clear target dropdown
  targetSelect.innerHTML = "";

  // Rebuild options without the one selected in sourceSelect
  packageNames.forEach((name) => {
    if (name !== selectedValue) {
      const opt = document.createElement("option");
      opt.value = name;
      opt.innerText = name;
      targetSelect.appendChild(opt);
    }
  });

  // Control the target's selected value
  if (!skipValueUpdate) {
    if (currentTargetValue !== selectedValue && packageNames.includes(currentTargetValue)) {
      targetSelect.value = currentTargetValue;
    } else {
      targetSelect.value = targetSelect.options[0].value;
    }
  }
}

/**
 * Populates both dropdowns initially and sets default values.
 */
function populateDropdowns() {
  packageNames.forEach((name) => {
    // Add to first dropdown
    const opt1 = document.createElement("option");
    opt1.value = name;
    opt1.innerText = name;
    packageSelect1.appendChild(opt1);

    // Add to second dropdown
    const opt2 = document.createElement("option");
    opt2.value = name;
    opt2.innerText = name;
    packageSelect2.appendChild(opt2);
  });

  // Set initial values
  packageSelect1.value = packageNames[0]; // e.g., "PRIME"
  packageSelect2.value = "Mentzen+ IT Podstawowy";

  // Update each dropdown so they don't show the same value as the other
  updateDropdownOptions(packageSelect2, packageSelect1);
  updateDropdownOptions(packageSelect1, packageSelect2);
}

/* ==========================================================================
   Status Icon Creation
   ========================================================================== */
/**
 * Creates a status icon (checkmark or cross) or a tooltip icon depending on the feature and package.
 * @param {string} featureStatus - "Yes" or "No" indicating if the package has the feature.
 * @param {string} feature - Name of the feature.
 * @param {string} packageName - Name of the package.
 * @returns {HTMLDivElement} A DOM element representing the icon.
 */
function createStatusIcon(featureStatus, feature, packageName) {
  const icon = document.createElement("div");
  icon.className = "status-icon";

  // Package-specific tooltip configurations
  const packageSpecificTooltips = {
    "Po roku nieprzerwanej współpracy możliwość skorzystania z bezpłatnych usług prawnych": {
      "Mentzen+ Prawo": "2h darmowych usług prawnych",
      "Mentzen+ Prawo i Podatki": "4h darmowych usług prawnych",
    },
  };

  // Feature-specific tooltip configurations
  const featuresWithTooltips = {
    "Prowadzenie księgowości": "do 10 lub 30 dok. miesięcznie",
    "Dostęp do platformy umożliwiającej przekazywanie dokumentów":
      "w przypadku prowadzenia księgowości",
    "Dostęp do danych raportowych takich jak podatki, wynagrodzenia, ewidencja VAT":
      "w przypadku prowadzenia księgowości",
    "Powiadomienia SMS o zbliżających się terminach płatności podatków itp.":
      "w przypadku prowadzenia księgowości",
    "Wsparcie w postępowaniach przed organami podatkowymi oraz sądami administracyjnymi, w tym przed Naczelnym Sądem Administracyjnym":
      "dla osób, które korzystały z naszego wsparcia w zakresie uzyskania i rozliczenia ulgi",
  };

  // Package categories for conditional tooltips
  const accountingPackages = ["Mentzen+ IT Podstawowy", "Mentzen+ IT Ryczałt"];
  const itPackages = ["Mentzen+ IT Podstawowy", "Mentzen+ IT Średni", "Mentzen+ IT Premium"];

  // Handle package-specific tooltip
  if (
    feature in packageSpecificTooltips &&
    packageName in packageSpecificTooltips[feature]
  ) {
    icon.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
        <text x="7" y="11" text-anchor="middle" fill="#0F766E" style="font-size: 14px; font-weight: 700;">?</text>
      </svg>`;
    icon.setAttribute("data-tooltip", packageSpecificTooltips[feature][packageName]);
    icon.style.cursor = "help";
    return icon;
  }

  // Handle feature-specific tooltips
  if (feature in featuresWithTooltips) {
    const requiresTooltip =
      feature ===
      "Wsparcie w postępowaniach przed organami podatkowymi oraz sądami administracyjnymi, w tym przed Naczelnym Sądem Administracyjnym"
        ? itPackages.includes(packageName)
        : accountingPackages.includes(packageName);

    if (requiresTooltip) {
      icon.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
          <text x="7" y="11" text-anchor="middle" fill="#0F766E" style="font-size: 14px; font-weight: 700;">?</text>
        </svg>`;
      icon.setAttribute("data-tooltip", featuresWithTooltips[feature]);
      icon.style.cursor = "help";
      return icon;
    }
  }

  // Create standard yes/no icons
  icon.setAttribute("role", "img");
  icon.setAttribute("aria-label", featureStatus === "Yes" ? "Included" : "Not included");

  if (featureStatus === "Yes") {
    icon.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
        <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="#0F766E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
  } else {
    icon.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
        <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="#B91C1C" stroke-width="2" stroke-linecap="round"/>
      </svg>`;
  }
  return icon;
}

/* ==========================================================================
   Comparison Rendering
   ========================================================================== */
/**
 * Renders the comparison based on selected packages and toggle state.
 */
function renderComparison() {
  const selectedPackage1 = packageSelect1.value;
  const selectedPackage2 = packageSelect2.value;
  const showOnlyDifferences = diffToggle.checked;

  comparisonBody.innerHTML = "";

  // Main container structure
  const contentWrapper = document.createElement("div");
  contentWrapper.className = "content-wrapper";

  const featureWrapper = document.createElement("div");
  featureWrapper.className = "feature-wrapper";

  const statusWrapper1 = document.createElement("div");
  statusWrapper1.className = "status-wrapper";

  const statusWrapper2 = document.createElement("div");
  statusWrapper2.className = "status-wrapper";

  // Assemble containers
  contentWrapper.appendChild(featureWrapper);
  contentWrapper.appendChild(statusWrapper1);
  contentWrapper.appendChild(statusWrapper2);
  comparisonBody.appendChild(contentWrapper);

  // Loop through all features to build rows
  allFeatures.forEach((feature, index) => {
    const package1HasFeature = packagesData[selectedPackage1].includes(feature) ? "Yes" : "No";
    const package2HasFeature = packagesData[selectedPackage2].includes(feature) ? "Yes" : "No";

    // If both packages don't have the feature, skip it entirely
    if (package1HasFeature === "No" && package2HasFeature === "No") return;

    // If "Show Only Differences" is on, skip identical rows
    if (showOnlyDifferences && package1HasFeature === package2HasFeature) return;

    // Create feature cell
    const featureCell = document.createElement("div");
    featureCell.className = "feature-cell";
    featureCell.setAttribute("data-feature", `feature-${index}`);

    // Hover effect for feature cell
    featureCell.addEventListener("mouseenter", () => {
      document
        .querySelectorAll(`[data-feature="feature-${index}"] .status-icon`)
        .forEach((icon) => {
          icon.style.animation = "scaleUp 0.2s ease forwards";
        });
      featureCell.style.color = "black";
      featureCell.style.transform = "translateX(5px)";
    });

    featureCell.addEventListener("mouseleave", () => {
      document
        .querySelectorAll(`[data-feature="feature-${index}"] .status-icon`)
        .forEach((icon) => {
          icon.style.animation = "scaleUp 0.2s ease reverse forwards";
        });
      featureCell.style.color = "";
      featureCell.style.transform = "translateX(0)";
    });

    // Vertical line in feature cell
    const verticalLine = document.createElement("span");
    verticalLine.className = "vertical-line";
    featureCell.appendChild(verticalLine);

    // Feature text
    const featureText = document.createTextNode(feature);
    featureCell.appendChild(featureText);
    featureWrapper.appendChild(featureCell);

    // Status cell for Package 1
    const statusCell1 = document.createElement("div");
    statusCell1.className = `status-cell ${package1HasFeature === "Yes" ? "status-yes" : "status-no"}`;
    statusCell1.setAttribute("data-label", selectedPackage1);
    statusCell1.setAttribute("data-feature", `feature-${index}`);
    statusCell1.appendChild(createStatusIcon(package1HasFeature, feature, selectedPackage1));
    statusWrapper1.appendChild(statusCell1);

    // Status cell for Package 2
    const statusCell2 = document.createElement("div");
    statusCell2.className = `status-cell ${package2HasFeature === "Yes" ? "status-yes" : "status-no"}`;
    statusCell2.setAttribute("data-label", selectedPackage2);
    statusCell2.setAttribute("data-feature", `feature-${index}`);
    statusCell2.appendChild(createStatusIcon(package2HasFeature, feature, selectedPackage2));
    statusWrapper2.appendChild(statusCell2);
  });
}

/* ==========================================================================
   Event Listeners & Initialization
   ========================================================================== */
packageSelect1.addEventListener("change", () => {
  updateDropdownOptions(packageSelect1, packageSelect2);
  renderComparison();
});

packageSelect2.addEventListener("change", () => {
  updateDropdownOptions(packageSelect2, packageSelect1);
  renderComparison();
});

diffToggle.addEventListener("change", renderComparison);

// Initial setup
populateDropdowns();
renderComparison();


# Aktualizace stránky Reference

## Co se změní

Stávající 3 fiktivní případové studie budou nahrazeny 10 reálnými anonymními referencemi (A-J) s novým rozšířeným formátem.

## Nový formát každé reference

Každá reference bude obsahovat:
- **Název** (např. "Reference A (anonymní)")
- **Výchozí situace** -- některé prázdné (ponecháme jako "---"), některé vyplněné
- **Postup** -- seznam bodů
- **Výsledek** -- seznam bodů
- **Metrika** -- zatím všude prázdná ("---")
- **Citace klienta** -- blokový citát s textem od klienta

## Technické kroky

### 1. Aktualizace `src/i18n/locales/cs.json` -- sekce `references`
- Nahrazení 3 starých `cases` (case1-case3) za 10 nových (caseA-caseJ)
- Každý case bude mít: `title`, `situation` (string nebo "—"), `approach` (pole bodů), `result` (pole bodů), `metric` ("—"), `quote` (citace klienta)
- Přidání nových labels: `metric` ("Metrika"), `quote` ("Co nám klient napsal")
- Přejmenování labelu `approach` z "Náš přístup" na "Postup"

### 2. Aktualizace `src/i18n/locales/en.json` -- sekce `references`
- Stejná struktura, texty ponechány v češtině (jsou to reálné citace), případně s anglickými labels

### 3. Přepracování `src/pages/ReferencesPage.tsx`
- Nový layout pro rozšířený formát reference:
  - Nadpis reference nahoře
  - 4 sloupce/sekce: Situace, Postup, Výsledek, Metrika
  - Pod tím blokový citát klienta (stylizovaný s uvozovkami)
- Postup a Výsledek budou renderovány jako seznamy bodů (odrážky), ne jako jednoduchý odstavec
- Prázdné hodnoty ("—") se zobrazí jako pomlčka

### 4. Aktualizace `src/components/ReferencesSection.tsx`
- Synchronizace se stejnými daty (sekce na homepage), případně zobrazení zkrácené verze (jen název + citát)

## Data referencí

10 referencí (A-J) s kompletními texty dle zadání, včetně jedné slovenské reference (H).

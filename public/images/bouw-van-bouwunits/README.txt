INSTRUKCJE DLA GALERII "BOUW VAN BOUWUNITS"
==============================================

1. Dodaj zdjęcia do tego folderu z nazwami:
   - bouwunit1.jpg
   - bouwunit2.jpg
   - bouwunit3.jpg
   - itd.

2. Po dodaniu zdjęć, zaktualizuj plik src/components/GalleryModal.tsx:
   - Znajdź kategorię 'general' w obiekcie allGalleryImages
   - Znajdź wpis z tytułem "Bouw van bouwunits"
   - Zmień imageUrl na: "/images/bouw-van-bouwunits/bouwunit1.jpg"
   - Dodaj więcej wpisów dla dodatkowych zdjęć

3. Zaktualizuj również plik src/pages/Home.tsx:
   - Znajdź GalleryCard z tytułem "Bouw van bouwunits"
   - Zmień imageUrl na: "/images/bouw-van-bouwunits/bouwunit1.jpg"

4. Opcjonalnie: Stwórz dedykowaną kategorię 'bouwunits' w GalleryModal.tsx
   podobnie jak zostało zrobione dla kategorii 'pvc'.

Format zdjęć: JPG, PNG (zalecane: JPG)
Rozmiar: Zalecane 1920x1080 lub podobne proporcje
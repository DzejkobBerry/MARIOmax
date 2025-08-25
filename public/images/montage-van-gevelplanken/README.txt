INSTRUKCJE DLA GALERII "MONTAGE VAN GEVELPLANKEN"
==============================================

1. Dodaj zdjęcia do tego folderu z nazwami:
   - gevelplank1.jpg
   - gevelplank2.jpg
   - gevelplank3.jpg
   - itd.

2. Po dodaniu zdjęć, zaktualizuj plik src/components/GalleryModal.tsx:
   - Znajdź kategorię 'general' w obiekcie allGalleryImages
   - Znajdź wpis z tytułem "Montage van gevelplanken"
   - Zmień imageUrl na: "/images/montage-van-gevelplanken/gevelplank1.jpg"
   - Dodaj więcej wpisów dla dodatkowych zdjęć

3. Zaktualizuj również plik src/pages/Home.tsx:
   - Znajdź GalleryCard z tytułem "Montage van gevelplanken"
   - Zmień imageUrl na: "/images/montage-van-gevelplanken/gevelplank1.jpg"

4. Opcjonalnie: Stwórz dedykowaną kategorię 'gevelplanken' w GalleryModal.tsx
   podobnie jak zostało zrobione dla kategorii 'pvc' i 'bouwunits'.

Format zdjęć: JPG, PNG (zalecane: JPG)
Rozmiar: Zalecane 1920x1080 lub podobne proporcje
Maksymalny rozmiar pliku: 2MB

Aktualna kategoria: general
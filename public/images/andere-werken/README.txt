INSTRUKCJE DODAWANIA ZDJĘĆ DO GALERII "ANDERE WERKEN"
=======================================================

1. DODAWANIE NOWYCH ZDJĘĆ:
   - Umieść pliki zdjęć w tym folderze (public/images/andere-werken/)
   - Używaj nazw plików: andere1.jpg, andere2.jpg, andere3.jpg, itd.
   - Obsługiwane formaty: .jpg, .jpeg, .png, .webp

2. ZALECANE ROZMIARY:
   - Szerokość: 1200-2400px
   - Wysokość: 800-1600px
   - Proporcje: 3:2 lub 4:3
   - Rozmiar pliku: maksymalnie 2MB

3. AKTUALIZACJA KODU:
   Po dodaniu nowych zdjęć, zaktualizuj plik:
   src/components/GalleryModal.tsx
   
   Dodaj nowe wpisy do tablicy 'isolatie' w obiekcie 'allGalleryImages':
   {
     imageUrl: "/images/andere-werken/andere[NUMER].jpg",
     title: "Andere werken",
     description: "Schilderen van muren en ramen, en leggen van vloerpanelen"
   }

4. AKTUALIZACJA GŁÓWNEGO ZDJĘCIA:
   W pliku src/pages/Home.tsx zaktualizuj imageUrl dla karty "Andere werken":
   imageUrl: "/images/andere-werken/andere1.jpg"

5. PRZYKŁAD DODAWANIA:
   - Dodaj plik: andere1.jpg
   - W GalleryModal.tsx dodaj wpis z imageUrl: "/images/andere-werken/andere1.jpg"
   - W Home.tsx zmień imageUrl na: "/images/andere-werken/andere1.jpg"

6. UWAGI:
   - Używaj spójnych nazw plików
   - Optymalizuj zdjęcia przed dodaniem
   - Sprawdź, czy zdjęcia wyświetlają się poprawnie w galerii

Data utworzenia: 25.08.2025
Folder: public/images/andere-werken/
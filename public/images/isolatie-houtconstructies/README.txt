INSTRUKCJE DODAWANIA ZDJĘĆ DO GALERII "ISOLATIE EN HOUTCONSTRUCTIES"
=================================================================

1. DODAWANIE NOWYCH ZDJĘĆ:
   - Umieść pliki zdjęć w tym folderze (public/images/isolatie-houtconstructies/)
   - Używaj nazw plików: isolatie1.jpg, isolatie2.jpg, isolatie3.jpg, itd.
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
     imageUrl: "/images/isolatie-houtconstructies/isolatie[NUMER].jpg",
     title: "Isolatie en houtconstructies",
     description: "Isolatie en houtconstructies voor gevelbekleding met houten planken."
   }

4. PRZYKŁAD DODAWANIA:
   - Dodaj plik: isolatie1.jpg
   - W GalleryModal.tsx dodaj wpis z imageUrl: "/images/isolatie-houtconstructies/isolatie1.jpg"

5. UWAGI:
   - Używaj spójnych nazw plików
   - Optymalizuj zdjęcia przed dodaniem
   - Sprawdź, czy zdjęcia wyświetlają się poprawnie w galerii

Data utworzenia: 25.08.2025
Folder: public/images/isolatie-houtconstructies/
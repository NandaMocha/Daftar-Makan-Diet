// Menu data array
const menuData = [
    // SARAPAN
    { name: 'Kentang Rebus & Telur', calories: 350, protein: 25, details: ['Kentang - 200g - 172 kal', 'Telur Rebus - 2 butir - 310 kal', 'Salad - 100g - 150 kal'], mealType: 'sarapan' },
    { name: 'Nasi & Telur Dadar', calories: 320, protein: 18, details: ['Nasi - 150g - 195 kal', 'Telur Dadar - 2 butir - 300 kal', 'Sayur Bayam - 100g - 23 kal'], mealType: 'sarapan' },
    { name: 'Roti Gandum & Ayam Suwir', calories: 280, protein: 20, details: ['Roti Gandum - 100g - 250 kal', 'Ayam Suwir - 150g - 247.5 kal', 'Tomat - 50g - 11 kal'], mealType: 'sarapan' },
    { name: 'Oatmeal & Pisang', calories: 250, protein: 10, details: ['Oatmeal - 100g - 130 kal', 'Pisang - 100g - 50 kal', 'Susu Rendah Lemak - 200ml - 84 kal'], mealType: 'sarapan' },
    { name: 'Roti Gandum & Telur Rebus', calories: 290, protein: 15, details: ['Roti Gandum - 100g - 250 kal', 'Telur Rebus - 2 butir - 310 kal', 'Pir - 100g - 50 kal'], mealType: 'sarapan' },
    { name: 'Kentang & Ayam Panggang', calories: 360, protein: 30, details: ['Kentang - 150g - 129 kal', 'Ayam Panggang - 150g - 247.5 kal', 'Melon - 100g - 34 kal'], mealType: 'sarapan' },
    { name: 'Nasi & Ayam Suwir', calories: 350, protein: 28, details: ['Nasi - 150g - 195 kal', 'Ayam Suwir - 150g - 247.5 kal', 'Apel - 100g - 52 kal'], mealType: 'sarapan' },
    { name: 'Roti Gandum & Daging Sapi', calories: 400, protein: 32, details: ['Roti Gandum - 100g - 250 kal', 'Daging Sapi - 150g - 375 kal', 'Sayur Rebus - 100g - 23 kal'], mealType: 'sarapan' },
    { name: 'Oatmeal & Ayam Suwir', calories: 330, protein: 25, details: ['Oatmeal - 100g - 130 kal', 'Ayam Suwir - 150g - 247.5 kal', 'Apel - 100g - 52 kal'], mealType: 'sarapan' },
    { name: 'Kentang & Ikan Panggang', calories: 380, protein: 28, details: ['Kentang - 150g - 129 kal', 'Ikan Panggang - 150g - 165 kal', 'Buah Pir - 100g - 50 kal'], mealType: 'sarapan' },
    { name: 'Nasi & Ikan Bakar', calories: 350, protein: 30, details: ['Nasi - 150g - 195 kal', 'Ikan Bakar - 150g - 165 kal', 'Sayur Tumis - 100g - 23 kal'], mealType: 'sarapan' },
    { name: 'Telur Dadar & Sayur Tumis', calories: 320, protein: 18, details: ['Telur Dadar - 2 butir - 300 kal', 'Sayur Tumis - 100g - 23 kal', 'Nasi - 100g - 130 kal'], mealType: 'sarapan' },
    { name: 'Roti Gandum & Tempe', calories: 300, protein: 20, details: ['Roti Gandum - 100g - 250 kal', 'Tempe - 50g - 55 kal', 'Sayur Tumis - 100g - 23 kal'], mealType: 'sarapan' },
    { name: 'Kentang Rebus & Ayam Suwir', calories: 380, protein: 28, details: ['Kentang - 200g - 172 kal', 'Ayam Suwir - 150g - 247.5 kal', 'Sayur Bayam - 100g - 23 kal'], mealType: 'sarapan' },
    
    // MAKAN SIANG
    { name: 'Ayam Panggang & Nasi', calories: 400, protein: 40, details: ['Nasi - 150g - 195 kal', 'Ayam Panggang - 200g - 330 kal', 'Sayur Tumis - 100g - 23 kal'], mealType: 'makanSiang' },
    { name: 'Daging Sapi & Kentang', calories: 500, protein: 45, details: ['Kentang - 200g - 172 kal', 'Daging Sapi - 200g - 500 kal', 'Brokoli - 100g - 34 kal'], mealType: 'makanSiang' },
    { name: 'Ikan Bakar & Nasi', calories: 450, protein: 35, details: ['Nasi - 150g - 195 kal', 'Ikan Bakar - 200g - 220 kal', 'Sayur Rebus - 100g - 23 kal'], mealType: 'makanSiang' },
    { name: 'Telur Balado & Nasi', calories: 380, protein: 22, details: ['Nasi - 150g - 195 kal', 'Telur Balado - 2 butir - 300 kal', 'Kangkung - 100g - 25 kal'], mealType: 'makanSiang' },
    { name: 'Roti Gandum & Ayam Rebus', calories: 420, protein: 35, details: ['Roti Gandum - 150g - 375 kal', 'Ayam Rebus - 200g - 330 kal', 'Sayur Bayam - 100g - 23 kal'], mealType: 'makanSiang' },
    { name: 'Kentang & Daging Sapi', calories: 480, protein: 40, details: ['Kentang - 250g - 215 kal', 'Daging Sapi - 150g - 375 kal', 'Sayur Tumis - 100g - 23 kal'], mealType: 'makanSiang' },
    { name: 'Ikan Panggang & Nasi', calories: 440, protein: 33, details: ['Nasi - 150g - 195 kal', 'Ikan Panggang - 200g - 220 kal', 'Brokoli - 100g - 34 kal'], mealType: 'makanSiang' },
    { name: 'Ayam Rebus & Kentang', calories: 430, protein: 36, details: ['Kentang - 200g - 172 kal', 'Ayam Rebus - 200g - 330 kal', 'Sayur Tumis - 100g - 23 kal'], mealType: 'makanSiang' },
    { name: 'Nasi & Daging Sapi', calories: 490, protein: 42, details: ['Nasi - 150g - 195 kal', 'Daging Sapi - 200g - 500 kal', 'Sayur Bayam - 100g - 23 kal'], mealType: 'makanSiang' },

    // SNACK SORE
    { name: 'Tempe Goreng & Sayur Tumis', calories: 300, protein: 20, details: ['Tempe - 50g - 55 kal', 'Sayur Tumis - 150g - 34.5 kal'], mealType: 'snackSore' },
    { name: 'Salad Ayam', calories: 200, protein: 18, details: ['Ayam Suwir - 100g - 165 kal', 'Selada - 150g - 34.5 kal', 'Tomat - 50g - 11 kal', 'Timun - 50g - 7.5 kal'], mealType: 'snackSore' },
    { name: 'Tempe & Telur Rebus', calories: 250, protein: 22, details: ['Tempe - 50g - 55 kal', 'Telur Rebus - 1 butir - 155 kal', 'Brokoli - 100g - 34 kal'], mealType: 'snackSore' },
    { name: 'Telur Dadar & Tumis Sayur', calories: 280, protein: 15, details: ['Telur Dadar - 1 butir - 150 kal', 'Sayur Tumis - 150g - 34.5 kal'], mealType: 'snackSore' },
    { name: 'Melon & Tempe Goreng', calories: 220, protein: 12, details: ['Melon - 150g - 51 kal', 'Tempe - 50g - 55 kal'], mealType: 'snackSore' },
    { name: 'Apel & Tempe Goreng', calories: 250, protein: 15, details: ['Apel - 100g - 52 kal', 'Tempe Goreng - 50g - 55 kal'], mealType: 'snackSore' },
    { name: 'Pir & Ayam Rebus', calories: 220, protein: 20, details: ['Pir - 100g - 50 kal', 'Ayam Rebus - 100g - 165 kal'], mealType: 'snackSore' },

    // MAKAN MALAM
    { name: 'Ikan Bakar & Nasi', calories: 450, protein: 35, details: ['Nasi - 150g - 195 kal', 'Ikan Bakar - 200g - 220 kal', 'Sayur Rebus - 100g - 23 kal'], mealType: 'makanMalam' },
    { name: 'Ayam Rebus & Kentang', calories: 350, protein: 30, details: ['Kentang - 200g - 172 kal', 'Ayam Rebus - 150g - 247.5 kal', 'Sayur Bayam - 100g - 23 kal'], mealType: 'makanMalam' },
    { name: 'Daging Sapi & Tumis Sayur', calories: 420, protein: 40, details: ['Daging Sapi - 200g - 500 kal', 'Sayur Tumis - 150g - 34.5 kal'], mealType: 'makanMalam' },
    { name: 'Tahu & Tempe Goreng', calories: 300, protein: 18, details: ['Tempe - 50g - 55 kal', 'Tahu Goreng - 100g - 160 kal', 'Sayur Rebus - 150g - 34.5 kal'], mealType: 'makanMalam' },
    { name: 'Roti Gandum & Ikan Rebus', calories: 350, protein: 28, details: ['Roti Gandum - 100g - 250 kal', 'Ikan Rebus - 200g - 220 kal', 'Sayur Tumis - 150g - 34.5 kal'], mealType: 'makanMalam' },
    { name: 'Melon & Ayam Suwir', calories: 300, protein: 25, details: ['Melon - 100g - 34 kal', 'Ayam Suwir - 150g - 247.5 kal', 'Sayur Tumis - 100g - 23 kal'], mealType: 'makanMalam' },
    { name: 'Ikan Panggang & Kentang', calories: 400, protein: 35, details: ['Kentang - 200g - 172 kal', 'Ikan Panggang - 200g - 220 kal', 'Sayur Bayam - 100g - 23 kal'], mealType: 'makanMalam' }
];

// Converting mealType to Indonesian
function getMealTypeLabel(mealType) {
    switch(mealType) {
        case 'sarapan': return 'Sarapan';
        case 'makanSiang': return 'Makan Siang';
        case 'snackSore': return 'Snack Sore';
        case 'makanMalam': return 'Makan Malam';
        default: return mealType;
    }
}

function renderMenuList(filteredData) {
    const menuList = document.getElementById('menuList');
    menuList.innerHTML = '';

    filteredData.forEach(menu => {
        const menuItem = document.createElement('li');
        menuItem.innerHTML = `
            <div><strong>${menu.name}</strong></div>
            <div style="font-size: 14px; color: #3182ce;"><strong>${getMealTypeLabel(menu.mealType)}</strong></div>
            <div style="font-size: 12px; color: grey;">${menu.calories} kkal</div>
            <div style="font-size: 12px; color: grey;">Protein: ${menu.protein} gram</div>
        `;
        menuItem.onclick = () => showPopup(menu);
        menuList.appendChild(menuItem);
    });
}

function filterMenu() {
    const filterValue = document.getElementById('mealFilter').value;
    const filteredData = filterValue === 'all' ? menuData : menuData.filter(menu => menu.mealType === filterValue);
    renderMenuList(filteredData);
}

function showPopup(menu) {
    document.getElementById('popupTitle').innerText = menu.name;
    document.getElementById('popupMealType').innerText = getMealTypeLabel(menu.mealType);
    document.getElementById('popupCalories').innerText = menu.calories + ' kkal';
    document.getElementById('popupProtein').innerText = menu.protein + ' gram';
    
    const detailsList = document.getElementById('popupDetails');
    detailsList.innerHTML = '';
    menu.details.forEach(detail => {
        const li = document.createElement('li');
        li.innerText = detail;
        detailsList.appendChild(li);
    });

    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Add event listener to close popup when clicking outside
document.getElementById('popup').addEventListener('click', function(event) {
    // If the click is on the background (popup div) but not on the popup-detail
    if (event.target === this) {
        closePopup();
    }
});

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initial Rendering
    filterMenu();
});
let workingHours = "09:00 - 18:00";
let appointmentRequests = [];

function defineWorkingHours() {
    const newHours = prompt("Çalışma saatlerini girin (örn: 09:00 - 18:00):");
    
    if (newHours) {
        workingHours = newHours;
        document.getElementById('workingHoursText').textContent = `Çalışma Saatleri: ${workingHours}`;
    }
}

function displayAppointmentRequests() {
    const list = document.getElementById('appointmentList');
    list.innerHTML = ""; // Liste içeriğini temizle

    for (let i = 0; i < appointmentRequests.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Randevu Saati: ${appointmentRequests[i]} `;
        
        const approveButton = document.createElement('button');
        approveButton.textContent = 'Onayla';
        approveButton.onclick = function() {
            approveAppointment(i);
        };
        listItem.appendChild(approveButton);

        const rejectButton = document.createElement('button');
        rejectButton.textContent = 'Reddet';
        rejectButton.onclick = function() {
            rejectAppointment(i);
        };
        listItem.appendChild(rejectButton);

        list.appendChild(listItem);
    }
}

function approveAppointment(index) {
    // Burada randevu onaylama işlemleri yapılabilir
    alert(`Randevu onaylandı: ${appointmentRequests[index]}`);
    appointmentRequests.splice(index, 1);
    displayAppointmentRequests();
}

function rejectAppointment(index) {
    // Burada randevu reddetme işlemleri yapılabilir
    alert(`Randevu reddedildi: ${appointmentRequests[index]}`);
    appointmentRequests.splice(index, 1);
    displayAppointmentRequests();
}

// İlk çalışma saatlerini göster
document.getElementById('workingHoursText').textContent = `Çalışma Saatleri: ${workingHours}`;

// İlk randevu listesini göster
displayAppointmentRequests();
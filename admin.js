document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('KuaförForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Formun otomatik olarak gönderilmesini engelle

        ekleKuaför();
    });
});

function ekleKuaför(){
    var kuaförAd=document.getElementById("KuaförAdi").value;
    var kuaförNo=document.getElementById("kuaförNo").value;

    var listItem=document.createElement('li');
    listItem.innerHTML = kuaförAd + "- tel:" +  kuaförNo;

    document.getElementById("kuaförListesi").appendChild(listItem);
    document.getElementById("KuaförForm").reset();

}
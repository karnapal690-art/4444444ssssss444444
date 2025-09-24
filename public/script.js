document.addEventListener('DOMContentLoaded', function() {
    const agreeButton = document.getElementById('agreeButton');
    const modal = document.getElementById('confirmationModal');
    const closeModal = document.querySelector('.close-modal');
    const cancelButton = document.querySelector('.btn-cancel');
    const confirmButton = document.querySelector('.btn-confirm');

    // Buka modal ketika tombol setuju diklik
    agreeButton.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

    // Tutup modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    cancelButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Konfirmasi pembayaran
    confirmButton.addEventListener('click', function() {
        // Simulasi proses pembayaran
        alert('Terima kasih! Persetujuan Anda telah tercatat. Silakan lanjutkan pembayaran biaya administrasi sebesar Rp 250.000 ke rekening Bank JAGO yang tertera.');
        
        // Redirect atau tindakan selanjutnya
        modal.style.display = 'none';
        
        // Tampilkan pesan sukses
        showSuccessMessage();
    });

    // Tutup modal ketika klik di luar
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    function showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #d4edda;
            color: #155724;
            padding: 20px;
            border-radius: 10px;
            border: 1px solid #c3e6cb;
            z-index: 1001;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        `;
        
        successDiv.innerHTML = `
            <h3>✅ Persetujuan Berhasil</h3>
            <p>Surat perjanjian telah disetujui. Silakan lanjutkan pembayaran administrasi.</p>
            <button onclick="this.parentElement.remove()" style="
                background: #28a745;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 10px;
            ">Mengerti</button>
        `;
        
        document.body.appendChild(successDiv);
    }

    // Animasi untuk elemen penting
    const importantElements = document.querySelectorAll('.amount-highlight, .btn-agree');
    importantElements.forEach(element => {
        element.style.transition = 'all 0.3s ease';
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Fitur pencetakan yang lebih baik
function setupPrint() {
    window.addEventListener('beforeprint', function() {
        document.querySelector('.action-buttons').style.display = 'none';
    });
    
    window.addEventListener('afterprint', function() {
        document.querySelector('.action-buttons').style.display = 'flex';
    });
}

setupPrint();

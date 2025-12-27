const predictions = [
    {
        market: 'Hong Kong',
        code: 'HK',
        time: '23:00 WIB',
        main: '7412',
        ikut: '5, 8, 0',
        colok: '7 / 4',
        top2d: ['74', '71', '72', '41', '42', '12'],
        bbfs: '7412580',
        prob: '92%'
    },
    {
        market: 'Singapore',
        code: 'SGP',
        time: '17:45 WIB',
        main: '3905',
        ikut: '1, 4, 7',
        colok: '3 / 9',
        top2d: ['39', '30', '35', '90', '95', '05'],
        bbfs: '3905147',
        prob: '88%'
    },
    {
        market: 'Sydney',
        code: 'SDY',
        time: '13:50 WIB',
        main: '6184',
        ikut: '2, 3, 9',
        colok: '6 / 1',
        top2d: ['61', '68', '64', '18', '14', '84'],
        bbfs: '6184239',
        prob: '94%'
    }
];

function init() {
    updateClock();
    setInterval(updateClock, 1000);
    
    renderPredictions();
    
    // Set current date
    const now = new Date();
    document.getElementById('today-date').innerText = now.toLocaleDateString('id-ID', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    });
}

function updateClock() {
    const clockEl = document.getElementById('current-time');
    const now = new Date();
    if (clockEl) {
        clockEl.innerText = now.toLocaleTimeString('id-ID', { hour12: false });
    }
}

function renderPredictions() {
    const container = document.getElementById('predictions');
    if (!container) return;

    container.innerHTML = predictions.map(p => `
        <div class="glass-panel rounded-3xl overflow-hidden hover-card transition-all duration-500 group border-slate-800">
            <!-- Card Header -->
            <div class="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/40">
                <div>
                    <h2 class="text-2xl font-black text-white group-hover:text-amber-500 transition-colors">${p.market}</h2>
                    <p class="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Result: ${p.time}</p>
                </div>
                <div class="text-right">
                    <div class="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded">ACCURACY ${p.prob}</div>
                </div>
            </div>

            <!-- Numbers Body -->
            <div class="p-8">
                <div class="mb-8 text-center">
                    <span class="text-xs text-slate-500 uppercase font-bold tracking-[0.2em] block mb-2">Angka Main</span>
                    <div class="text-5xl font-black tracking-widest text-white drop-shadow-sm">${p.main}</div>
                </div>

                <div class="grid grid-cols-2 gap-4 mb-8">
                    <div class="bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
                        <span class="text-[10px] text-slate-500 uppercase font-bold block mb-1">Angka Ikut</span>
                        <span class="text-lg font-bold text-amber-500">${p.ikut}</span>
                    </div>
                    <div class="bg-slate-950/50 p-4 rounded-2xl border border-slate-800 text-right">
                        <span class="text-[10px] text-slate-500 uppercase font-bold block mb-1">Colok Bebas</span>
                        <span class="text-lg font-bold text-amber-500">${p.colok}</span>
                    </div>
                </div>

                <div class="mb-8">
                    <span class="text-[10px] text-slate-500 uppercase font-bold block mb-3 text-center">TOP 2D Jitu Hari Ini</span>
                    <div class="flex flex-wrap justify-center gap-3">
                        ${p.top2d.map(num => `
                            <span class="w-12 h-12 flex items-center justify-center bg-slate-900 rounded-xl border border-slate-800 text-sm font-bold hover:border-amber-500 transition-colors cursor-default">
                                ${num}
                            </span>
                        `).join('')}
                    </div>
                </div>

                <div class="bg-amber-500/5 border border-dashed border-amber-500/30 p-4 rounded-2xl">
                    <div class="flex justify-between items-center">
                        <span class="text-xs text-amber-500 font-bold uppercase tracking-widest">BBFS Campuran</span>
                        <i class="fa-solid fa-copy text-amber-500/50 text-xs cursor-pointer hover:text-amber-500"></i>
                    </div>
                    <div class="text-2xl font-mono font-black text-white mt-1 tracking-[0.3em]">${p.bbfs}</div>
                </div>
            </div>

            <!-- Action -->
            <div class="px-6 pb-6">
                <button class="w-full py-4 gradient-brand text-slate-950 font-black rounded-2xl uppercase tracking-widest text-sm shadow-xl shadow-amber-500/10 hover:opacity-90 transition-opacity">
                    Pasang Sekarang
                </button>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', init);
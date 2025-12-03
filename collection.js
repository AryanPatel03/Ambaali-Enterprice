document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('collection-modal');
    const modalTitle = document.getElementById('collection-title');
    const modalContent = document.getElementById('collection-content');
    const closeModal = document.getElementById('close-modal');
    // Open and populate the collection modal for a given category
    function openCollectionModal(category) {
        const collection = collections[category];
        if (!collection) return;
        modalTitle.textContent = collection.title;
        modalContent.innerHTML = '';
        collection.products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow';
            // Use only product name for image query
            const imageUrl = `https://readdy.ai/api/search-image?query=${encodeURIComponent(product.name)}&width=300&height=200&seq=${category}_${product.name.toLowerCase().replace(/\s+/g, '_')}&orientation=landscape`;
            productDiv.innerHTML = `<img src="${imageUrl}" alt="${product.name}" class="w-full h-48 object-cover object-top"><div class="p-4"><h3 class="font-semibold text-gray-900 mb-4">${product.name}</h3><button class="bg-primary text-white px-4 py-2 !rounded-button text-sm font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap w-full cursor-pointer request-quote-btn" data-product-name="${product.name}">Request Quote</button></div>`;
            modalContent.appendChild(productDiv);
        });
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    const collections = {
        agate: {
            title: 'Agate Collection',
            products: [
                { name: 'Banded Agate', image: 'Premium banded agate specimen featuring perfectly parallel bands in rich chocolate brown, cream, charcoal gray and ivory layers creating distinct concentric patterns, natural chalcedony with exceptional translucency and sharp band definition, polished cabochon showing geological layering formed over millions of years, museum quality banded structure on clean white background' },
                { name: 'Fire Agate', image: 'Mesmerizing fire agate from Mexico displaying brilliant iridescent flames in electric red, orange and gold colors dancing across botryoidal surface, rare phenomenal gemstone with rainbow fire flashes and metallic schiller effects, natural play of color creating liquid fire appearance within translucent brown base stone, collector grade fire agate specimen' },
                { name: 'Moss Agate', image: 'Beautiful moss agate featuring vivid green dendritic inclusions resembling miniature forest scenes within crystal clear chalcedony, natural chlorite formations creating fern-like patterns and botanical landscapes, translucent white base showcasing intricate moss-like mineral inclusions that appear as tiny trees and vegetation frozen in stone' },
                { name: 'Blue Lace Agate', image: 'Delicate blue lace agate from Namibia displaying soft powder blue and white lace-like patterns in flowing concentric bands, gentle pastel coloration with intricate chalcedony banding resembling fine lacework, ethereal translucent appearance with swirling cloud-like formations and silk smooth texture perfect for jewelry applications' },
                { name: 'Crazy Lace Agate', image: 'Vibrant crazy lace agate from Mexico showcasing chaotic twisted banding in warm earth tones of cream, caramel, russet red, golden yellow and burnt orange creating wild maze-like patterns, joyful happy stone with complex swirling formations and organic flowing designs that never repeat, polished specimen with lively energy' },
                { name: 'Tree Agate', image: 'Scenic tree agate displaying dark green to black dendritic inclusions forming detailed tree silhouettes and forest canopy patterns within milky white chalcedony matrix, natural manganese oxide formations resembling bare winter trees against snowy landscape, nature-inspired dendritic artwork with peaceful botanical imagery perfect for meditation' },
                { name: 'Agate Geodes', image: 'Spectacular split agate geode revealing crystalline druzy cavity surrounded by colorful banded agate walls in purple, gray, white and cream concentric layers, natural geological formation showing millions of years of crystal growth inside volcanic cavity, museum quality mineral specimen with sparkling quartz crystals and rainbow agate banding' },
                { name: 'Botswana Agate', image: 'Premium Botswana agate featuring refined parallel banding in soft dove gray, rose pink, peach and ivory colors with exceptional translucency, African specimen displaying subtle color gradations and elegant layered structure, high-grade polished finish revealing delicate earth tone patterns and remarkable clarity perfect for fine jewelry' },
                { name: 'Laguna Agate', image: 'Rare Laguna agate nodule from Mexico displaying tight fortification banding in brilliant red, orange, yellow and white creating stunning eye-like bull ring patterns, highly coveted collector specimen with intense natural colors and perfect concentric geometric bands, precious small formation with exceptional pattern definition and vibrant hues' },
                { name: 'Plume Agate', image: 'Artistic plume agate showcasing ethereal feather-like mineral inclusions in rust red, amber and brown colors within clear chalcedony, wispy plume patterns resembling exotic bird feathers and organic formations creating natural masterpiece, flowing mineral brushstrokes and delicate inclusions that appear to dance within the stone matrix' },
                { name: 'Dendritic Agate', image: 'Stunning dendritic agate featuring intricate black manganese oxide tree formations creating detailed landscape scenes within translucent chalcedony, natural dendritic patterns resembling bare trees against winter sky, landscape stone with botanical imagery and scenic beauty that captures nature art frozen in geological time' },
                { name: 'Sardonyx Agate', image: 'Classic sardonyx agate displaying alternating bands of rich carnelian orange-red and pure white chalcedony with sharp color contrast, traditional Roman gemstone variety historically prized for cameo carving, parallel banding pattern with ancient significance and timeless beauty, perfectly polished specimen showing distinct layered structure' }
            ]
        },
        quartz: {
            title: 'Quartz Varieties Collection',
            products: [
                { name: 'Clear Quartz Points', image: 'Perfect clear quartz crystal points with natural hexagonal terminations, transparent colorless silicon dioxide crystals with brilliant clarity, Brazilian rock crystal specimens displaying natural crystal faces and geometric formations' },
                { name: 'Rose Quartz', image: 'Soft pink rose quartz specimens in various forms from rough to polished, gentle pink coloration from titanium and manganese inclusions, translucent to translucent pink varieties for emotional healing and heart chakra work' },
                { name: 'Smoky Quartz', image: 'Natural smoky quartz crystals in brown to black colors with natural radiation-induced coloration, terminated crystal points and clusters from Brazil, grounding stone specimens with translucent to opaque smoky transparency' },
                { name: 'Amethyst Crystals', image: 'Purple amethyst quartz crystals and cluster formations in lavender to deep violet colors, Brazilian and Uruguayan specimens with natural hexagonal crystal points, crown chakra meditation crystals with rich purple saturation' },
                { name: 'Citrine Natural', image: 'Natural golden yellow citrine quartz specimens with pale yellow to deep amber coloration, unheated Brazilian citrine crystals with natural color formation, abundance and prosperity stones with warm sunny energy' },
                { name: 'Green Quartz Prasiolite', image: 'Rare natural green quartz prasiolite in mint to forest green colors, heat-treated amethyst creating beautiful green variety, faceted and rough specimens of this uncommon green quartz family member' },
                { name: 'Rutilated Quartz', image: 'Spectacular rutilated quartz with golden needle-like rutile crystal inclusions within clear quartz matrix, angel hair quartz specimens showing titanium dioxide needles creating internal golden networks and patterns' },
                { name: 'Tourmalinated Quartz', image: 'Clear quartz crystals with black tourmaline needle inclusions creating striking contrast, schorl tourmaline crystals naturally grown within clear quartz matrix, protection stones combining clarity with grounding properties' },
                { name: 'Phantom Quartz', image: 'Fascinating phantom quartz crystals showing ghost-like internal crystal formations within clear quartz, chlorite or other mineral phantoms creating layered growth patterns visible inside terminated crystals' },
                { name: 'Milky Quartz', image: 'Milky white quartz crystals with cloudy translucent to opaque appearance, white coloration from fluid and gas inclusions, natural milky quartz formations and clusters with creamy white coloration and healing properties' },
                { name: 'Ametrine Bicolor', image: 'Rare ametrine quartz displaying both amethyst purple and citrine yellow zones in single crystals, Bolivian specimens with natural color zoning creating beautiful bicolor gemstones, unique quartz variety combining two colors' },
                { name: 'Strawberry Quartz', image: 'Beautiful strawberry quartz with red hematite and lepidocrocite inclusions creating pink to reddish coloration within clear quartz matrix, Mexican specimens with strawberry-like appearance and heart chakra properties' }
            ]
        },
        jasper: {
            title: 'Jasper Stones Collection',
            products: [
                { name: 'Red Jasper', image: 'Deep crimson red jasper specimens in rich brick red to burgundy colors, opaque microcrystalline quartz variety with earthy iron oxide coloration, polished and rough red jasper stones for grounding and vitality energy work' },
                { name: 'Picture Jasper', image: 'Remarkable picture jasper displaying natural landscape scenes within the stone, earth-toned patterns resembling desert vistas, mountains and geological formations, polished slabs showing scenic imagery in brown and tan colors' },
                { name: 'Ocean Jasper', image: 'Rare ocean jasper from Madagascar featuring spherical orbicular patterns in green, white, pink and cream colors, botryoidal surface textures with eye-like circular formations, collector grade specimens with unique oceanic patterns' },
                { name: 'Leopard Skin Jasper', image: 'Distinctive leopard skin jasper with natural spotted patterns resembling animal print, tan, brown and cream base colors with darker brown to black spots, shamanic journey stone with wild animal energy patterns' },
                { name: 'Yellow Jasper', image: 'Bright yellow jasper specimens in golden mustard to pale yellow colors, opaque chalcedony with sunny warm energy, nurturing stone for solar plexus chakra work and confidence building, smooth polished surfaces' },
                { name: 'Mookaite Jasper', image: 'Australian mookaite jasper in rich burgundy, yellow and cream colors with flowing patterns, ancient sedimentary rock with earthy connection properties, Windalia radiolarite variety with warm earth tone banding' },
                { name: 'Bumblebee Jasper', image: 'Vibrant bumblebee jasper from Indonesia with bright yellow and black banded patterns, volcanic formation stone with realgar and orpiment minerals creating bee-like striped coloration, rare collector specimens' },
                { name: 'Dalmatian Jasper', image: 'Playful dalmatian jasper with black tourmaline spots on creamy white to beige background, dog-like spotted pattern creating fun and joyful energy, tumbled stones with distinct black speckled markings' },
                { name: 'Rainforest Jasper', image: 'Beautiful rainforest jasper rhyolite with green, brown and cream patterns resembling forest canopy, Australian green rhyolite with organic flowing patterns and earth connection properties, nature-inspired stone specimens' },
                { name: 'Brecciated Jasper', image: 'Unique brecciated jasper with angular fragmented patterns in red and brown colors, naturally broken and recemented jasper pieces creating mosaic-like patterns, geological specimen showing natural fracturing and healing processes' }
            ]
        },
        'semi-precious': {
            title: 'Semi-Precious Gemstones Collection',
            products: [
                { name: 'Turquoise', image: 'Natural turquoise specimens in sky blue to green-blue colors with characteristic matrix patterns, Arizona and Persian turquoise varieties, copper aluminum phosphate mineral with waxy luster and cultural significance in jewelry making' },
                { name: 'Carnelian', image: 'Vibrant orange to red carnelian chalcedony specimens with translucent waxy luster, natural iron oxide coloration creating warm sunset colors, Brazilian and Indian carnelian perfect for jewelry and sacral chakra healing work' },
                { name: 'Moonstone', image: 'Luminous moonstone feldspar displaying blue adularescence flash, creamy white to gray base color with moonlike glow effect, Sri Lankan and Indian moonstone cabochons showing optical schiller phenomena' },
                { name: 'Labradorite', image: 'Spectacular labradorite feldspar with brilliant blue, green and gold labradorescence flash, Madagascar specimens showing intense color play and spectrolite quality iridescent effects, magical transformation stone with aurora-like colors' },
                { name: 'Sunstone', image: 'Golden sunstone feldspar with aventurescence sparkle from copper platelet inclusions, Oregon sunstone in warm orange to champagne colors, schiller effect creating internal metallic glitter and sunny radiant energy' },
                { name: 'Amazonite', image: 'Beautiful blue-green amazonite feldspar with characteristic turquoise coloration, Russian and Colorado specimens with white albite streaks, microcline variety with soothing aqua colors perfect for throat chakra work' },
                { name: 'Aventurine Green', image: 'Soft green aventurine quartz with subtle sparkly mica inclusions creating gentle shimmer, heart chakra healing stone in various green shades, Indian aventurine with fuchsite inclusions for luck and prosperity energy' },
                { name: 'Sodalite', image: 'Deep royal blue sodalite with white calcite veining patterns, Brazilian specimens with rich ultramarine blue color and natural white marbled patterns, throat chakra stone for clear communication and logical thinking' },
                { name: 'Lapis Lazuli', image: 'Premium lapis lazuli with deep ultramarine blue color and golden pyrite flecks, Afghan specimens with intense blue lazurite mineral and metallic gold inclusions, ancient wisdom stone for third eye chakra activation' },
                { name: 'Prehnite', image: 'Soft green prehnite specimens with translucent to transparent clarity, apple green to yellow-green coloration with vitreous luster, Australian and South African prehnite for heart chakra healing and unconditional love energy' }
            ]
        },
        opal: {
            title: 'Opal Stones Collection',
            products: [
                { name: 'White Opal', image: 'Australian white opal with light body tone and brilliant play of color displaying rainbow fire, Coober Pedy specimens with multicolored flash against milky white background, precious opal with spectral color phenomena' },
                { name: 'Black Opal', image: 'Rare black opal from Lightning Ridge Australia with dark body tone enhancing brilliant color play, most valuable opal variety showing electric blues, greens and reds against black potch background, collector grade specimens' },
                { name: 'Boulder Opal', image: 'Unique boulder opal preserved in natural brown ironstone matrix from Queensland Australia, opal veins and patches within host rock creating freeform natural artworks with colorful fire and earthy matrix patterns' },
                { name: 'Crystal Opal', image: 'Transparent to translucent crystal opal with brilliant clarity and vivid color play, Mexican fire opal and Australian crystal varieties showing exceptional transparency and rainbow color flashes through clear opal body' },
                { name: 'Ethiopian Opal', image: 'Hydrophane Ethiopian opal from Welo province with unique water-absorbing properties, play of color becomes more vibrant when wet, natural rough opal specimens and polished cabochons with honeycomb patterns' },
                { name: 'Pink Opal', image: 'Soft pink opal from Peru in rose to coral pink colors without play of color, common opal variety with gentle pastel pink coloration, heart chakra healing stone with nurturing feminine energy and calming properties' },
                { name: 'Blue Opal', image: 'Peruvian blue opal in sky blue to deep blue colors, translucent to opaque common opal without fire, throat chakra stone with soothing blue energy for communication and emotional healing properties' },
                { name: 'Fire Opal Mexican', image: 'Mexican fire opal in brilliant orange to red colors with exceptional clarity, transparent to translucent specimens from Querétaro with intense fiery coloration and occasional play of color, faceted and cabochon cuts' },
                { name: 'Contra Luz Opal', image: 'Rare contra luz opal showing color play only when backlit, Mexican specimens with hidden fire that appears when light passes through the stone, collector grade opal with unique optical properties requiring transmitted light' },
                { name: 'Honey Opal', image: 'Golden honey opal in warm amber to yellow colors, common opal variety with translucent honey-like appearance, Mexican specimens with golden coloration perfect for solar plexus chakra work and manifestation energy' }
            ]
        },
        minerals: {
            title: 'Raw Minerals Collection',
            products: [
                { name: 'Pyrite Cubes', image: 'Perfect golden pyrite crystals in natural cubic formations with brilliant metallic luster, fools gold specimens showing geometric crystal faces and mirror-like brassy surfaces, iron sulfide mineral with protective energy properties' },
                { name: 'Fluorite Octahedrons', image: 'Beautiful fluorite crystals in octahedral formations displaying purple, green, blue and clear colors, calcium fluoride specimens with perfect geometric crystal shapes and glassy transparency, mental clarity and focus stones' },
                { name: 'Hematite Specular', image: 'Metallic specular hematite with mirror-like silvery surfaces and high metallic luster, iron oxide mineral specimens with kidney ore formations and botryoidal shapes, grounding stone with heavy metallic feel' },
                { name: 'Malachite Specimens', image: 'Vibrant green malachite with characteristic banded patterns in emerald to forest green colors, copper carbonate mineral from Congo with swirling bands and rich green coloration, heart chakra transformation stone' },
                { name: 'Calcite Varieties', image: 'Diverse calcite crystal specimens in clear, orange, green, blue and pink colors showing perfect rhombohedral cleavage and double refraction optical properties, calcium carbonate crystals with scalenohedral terminations' },
                { name: 'Selenite Towers', image: 'White selenite crystal towers and wands with fibrous gypsum crystal structure, translucent white crystals with pearl-like luster perfect for cleansing and charging other crystals, crown chakra purification stones' },
                { name: 'Tourmaline Specimens', image: 'Natural tourmaline crystals in black schorl, green verdelite and pink rubellite varieties, prismatic crystals with striations and natural terminations, complex borosilicate minerals with piezoelectric properties' },
                { name: 'Garnet Crystals', image: 'Deep red garnet crystals in perfect dodecahedral and trapezohedron formations, almandine and pyrope varieties with wine red to burgundy coloration, January birthstone specimens with brilliant vitreous luster' },
                { name: 'Apatite Blue Green', image: 'Blue-green apatite crystals with hexagonal prismatic formations and excellent clarity, calcium phosphate mineral in neon blue to sea green colors, throat chakra communication stone with electric blue coloration' },
                { name: 'Lepidolite Mica', image: 'Soft lavender lepidolite mica with characteristic layered structure and pearly luster, lithium-rich mica variety in lilac to lavender colors, calming stone for anxiety relief and emotional balance with gentle energy' }
            ]
        },
        healing: {
            title: 'Healing Crystals Collection',
            products: [
                { name: 'Clear Quartz Master Healer', image: 'Perfect clear quartz crystal points and clusters for amplifying energy and healing work, transparent rock crystal with hexagonal terminations, master healer crystal for crown chakra and universal healing applications' },
                { name: 'Black Tourmaline Protection', image: 'Raw black tourmaline schorl crystals with natural prismatic formations and deep black color, EMF protection and grounding stone with strong protective energy field, root chakra security and negative energy shielding' },
                { name: 'Rose Quartz Love Stone', image: 'Gentle pink rose quartz specimens for heart chakra healing and unconditional love energy, soft pink coloration from titanium inclusions, emotional healing crystal for self-love, relationships and inner peace' },
                { name: 'Green Aventurine Luck', image: 'Lucky green aventurine quartz with subtle mica sparkles for prosperity and opportunity, heart chakra stone in soft green colors, Indian aventurine with fuchsite inclusions for luck, growth and new beginnings' },
                { name: 'Sodalite Communication', image: 'Royal blue sodalite with white calcite veining for throat chakra and clear communication, logical thinking stone with deep blue coloration, Brazilian specimens for truth, wisdom and rational thought processes' },
                { name: 'Amethyst Spiritual Connection', image: 'Purple amethyst crystals for crown chakra activation and spiritual awareness, natural terminations in lavender to deep violet colors, meditation stone for higher consciousness, intuition and spiritual protection' },
                { name: 'Selenite Cleansing Wand', image: 'White selenite wands for crystal cleansing and energy purification, fibrous gypsum crystals with high vibration energy, crown chakra connection and space clearing tool with self-cleansing properties' },
                { name: 'Hematite Grounding Stone', image: 'Metallic hematite specimens for root chakra grounding and stability, iron oxide mineral with heavy metallic feel and mirror-like luster, strength and courage stone for focus and mental clarity' },
                { name: 'Carnelian Creativity Booster', image: 'Vibrant orange carnelian for sacral chakra and creative energy activation, translucent chalcedony with warm orange to red coloration, motivation stone for confidence, courage and artistic expression' },
                { name: 'Labradorite Transformation', image: 'Mystical labradorite with blue and green labradorescence flash for transformation and magic, Madagascar specimens with intense color play, third eye chakra stone for intuition, psychic abilities and spiritual awakening' }
            ]
        },
        lapidary: {
            title: 'Custom Lapidary Services',
            products: [
                { name: 'Cabochon Cutting Service', image: 'Professional cabochon cutting service creating smooth domed gemstones in oval, round and freeform shapes, precision grinding and polishing for jewelry settings, custom sizing from 6mm to 40mm diameter' },
                { name: 'Faceted Gemstone Cutting', image: 'Expert faceted gemstone cutting service for transparent stones, brilliant cut, emerald cut and custom faceting patterns, precision angles for maximum brilliance and light reflection in finished gemstones' },
                { name: 'Stone Carving Art', image: 'Hand-carved stone sculptures and figurines by skilled artisans, animal carvings, decorative objects and custom sculptures, detailed lapidary artwork in various gemstone materials with intricate craftsmanship' },
                { name: 'Bead Drilling Service', image: 'Precision drilling service for creating beads and pendants, various hole sizes from 1mm to 8mm diameter, professional diamond-tipped drilling equipment ensuring clean holes without cracking or chipping' },
                { name: 'Custom Shape Cutting', image: 'Custom shape cutting service for specific applications, geometric forms, hearts, teardrops and unique designer cuts, precision sawing and shaping for architectural, jewelry and decorative purposes' },
                { name: 'Stone Polishing Service', image: 'Professional stone polishing service achieving mirror finish on all types of minerals, restoration of old specimens, multiple grit stages from rough to final polish, enhancing natural beauty and luster' },
                { name: 'Slab Cutting Service', image: 'Precision slab cutting service for bookends, display pieces and lapidary work, diamond blade sawing creating flat parallel surfaces, custom thickness from 3mm to 50mm for various applications' },
                { name: 'Tumbling Service', image: 'Rock tumbling service creating smooth polished stones, multi-stage tumbling process from rough to high polish, bulk processing for decorative stones, craft supplies and healing crystal preparation' },
                { name: 'Engraving Service', image: 'Stone engraving service for personalized gemstones, laser and hand engraving techniques, custom text, symbols and designs on flat surfaces, memorial stones, awards and personalized jewelry pieces' },
                { name: 'Repair and Restoration', image: 'Professional repair and restoration service for damaged gemstones, crack filling, chip removal and surface restoration, bringing old specimens back to display quality condition with expert craftsmanship' }
            ]
        }
    };

    // Use event delegation so clicks work across SPA page switches
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('.view-collection-btn');
        if (!btn) return;
        e.preventDefault();
        e.stopPropagation();
        const category = btn.getAttribute('data-category');
        console.log('Opening collection modal for category:', category);
        openCollectionModal(category);
        // Ensure modal is visible
        setTimeout(() => {
            if (modal.classList.contains('hidden')) {
                console.log('Modal was hidden, removing hidden class');
                modal.classList.remove('hidden');
            }
        }, 50);
    });

    closeModal.addEventListener('click', function () {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });

    // Handle footer product links - map text to category
    const categoryMap = {
        'Agate Collection': 'agate',
        'Quartz Varieties': 'quartz',
        'Jasper Stones': 'jasper',
        'Semi-Precious Stones': 'semi-precious',
        'Healing Crystals': 'healing'
    };

    // Store category to open after navigation
    window.pendingCategoryModal = null;

    // Intercept footer product link clicks to redirect to Categories and open modal
    document.addEventListener('click', function (e) {
        const footerLink = e.target.closest('.footer-link');
        if (!footerLink) return;
        
        // Prefer explicit data-category attribute; fall back to link text mapping
        const dataCat = footerLink.getAttribute('data-category');
        const linkText = footerLink.textContent.trim();
        const category = dataCat || categoryMap[linkText];

        if (!category) return; // Not a product link
        
        e.preventDefault();
        e.stopPropagation();
        
        // Set the category to open after navigation
        window.pendingCategoryModal = category;
        
        // Navigate to categories page
        if (window.showPage) {
            window.showPage('categories');
            
            // Open modal after navigation completes
            setTimeout(() => {
                if (window.pendingCategoryModal) {
                    openCollectionModal(window.pendingCategoryModal);
                    window.pendingCategoryModal = null;
                }
            }, 300);
        }
    });

    // Also handle "View Complete Collection" buttons on Categories page directly
    // This ensures the modal opens immediately on Categories page (not on Home page)
    // The event delegation above already handles this through the .view-collection-btn selector
});

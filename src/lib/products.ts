export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  mrp: number;
  imageUrl: string;
  images?: string[];
  composition?: string[];
  benefits?: string[];
  indications?: string[];
  dosage?: string;
  precautions?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'zydofia-q10',
    name: 'Zydofia-Q10 Tablets',
    category: 'Nutraceuticals',
    description: 'Zydofia-Q10 is a nutraceutical formulation designed to improve cellular energy, fertility, heart health, and overall well-being. Coenzyme Q10 (CoQ10) plays a vital role in energy production in mitochondria, while antioxidants like Lycopene and Selenium protect cells from oxidative stress. Omega-3 fatty acids and Zinc support reproductive health, cardiovascular function, and immunity.',
    price: 450.00,
    mrp: 599.00,
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600',
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1471864190281-ad5fe9ac0724?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1631549916768-4119b295f926?auto=format&fit=crop&q=80&w=600'
    ],
    composition: [
      'Coenzyme Q10',
      'L-Carnitine',
      'Lycopene',
      'Omega-3 Fatty Acids',
      'Selenium',
      'Zinc',
      'Essential Vitamins & Minerals'
    ],
    benefits: [
      'Supports Male Fertility: Enhances sperm motility, count, and quality.',
      'Boosts Energy Levels: CoQ10 improves mitochondrial energy production.',
      'Cardiac Health: Promotes better heart function and circulation.',
      'Powerful Antioxidant Protection: Reduces oxidative damage and stress.',
      'Reproductive Wellness: Improves overall reproductive health.',
      'Immunity & Vitality: Strengthens natural defense mechanisms.'
    ],
    indications: [
      'Male infertility and low sperm motility (Asthenozoospermia)',
      'Oxidative stress-related infertility',
      'General weakness and fatigue',
      'Cardiovascular health support',
      'As an adjunct in reproductive treatments'
    ],
    dosage: '1 tablet daily after meals, or as directed by your doctor.',
    precautions: [
      'Use under medical supervision.',
      'Not recommended for children unless prescribed.',
      'Pregnant and lactating women should consult a doctor before use.'
    ]
  },
  {
    id: 'hp-pain-reliever',
    name: 'HP-Pain Reliever 500',
    category: 'Analgesics',
    description: 'Advanced analgesic and antipyretic formulation for rapid relief from acute pain and high fever. Designed for maximum bioavailability and gentle gastrointestinal profile.',
    price: 45.00,
    mrp: 65.00,
    imageUrl: 'https://images.unsplash.com/photo-1550572017-ed200f545dec?auto=format&fit=crop&q=80&w=600',
    images: [
      'https://images.unsplash.com/photo-1550572017-ed200f545dec?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=600'
    ],
    composition: ['Paracetamol 500mg'],
    benefits: [
      'Rapid Pain Relief: Quickly targets muscle and joint pain.',
      'Fever Reduction: Effective antipyretic action.',
      'Safe Profile: Well-tolerated in institutional settings.'
    ],
    indications: ['Fever', 'Headache', 'Muscle pain', 'Post-operative recovery'],
    dosage: '1-2 tablets every 4-6 hours, not exceeding 8 tablets in 24 hours.',
    precautions: ['Avoid alcohol consumption.', 'Liver health monitoring required for long-term use.']
  },
  {
    id: 'hpi-amox-250',
    name: 'HPI-Amox 250 Capsules',
    category: 'Antibiotics',
    description: 'Broad-spectrum penicillin antibiotic used to treat bacterial infections. Effective against a wide range of gram-positive and gram-negative organisms.',
    price: 125.00,
    mrp: 180.00,
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306dca664?auto=format&fit=crop&q=80&w=600',
    images: [
      'https://images.unsplash.com/photo-1576086213369-97a306dca664?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=600'
    ],
    composition: ['Amoxicillin 250mg'],
    benefits: [
      'Wide Spectrum: Effective against various bacterial strains.',
      'High Bioavailability: Fast absorption for rapid treatment.',
      'Stable Formulation: Long shelf-life for hospital stock.'
    ],
    indications: ['Respiratory tract infections', 'Skin infections', 'UTIs', 'Dental abscesses'],
    dosage: 'One capsule every 8 hours or as prescribed.',
    precautions: ['Check for penicillin allergy.', 'Complete the full course even if feeling better.']
  },
  {
    id: 'meta-control-500',
    name: 'Meta-Control 500mg',
    category: 'Antidiabetics',
    description: 'First-line medication for the treatment of type 2 diabetes. Helps control blood sugar levels by improving insulin sensitivity.',
    price: 85.00,
    mrp: 110.00,
    imageUrl: 'https://images.unsplash.com/photo-1626716493137-b67fe9501e76?auto=format&fit=crop&q=80&w=600',
    images: [
      'https://images.unsplash.com/photo-1626716493137-b67fe9501e76?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1631549916768-4119b295f926?auto=format&fit=crop&q=80&w=600'
    ],
    composition: ['Metformin Hydrochloride 500mg'],
    benefits: [
      'Blood Sugar Management: Effective long-term glucose control.',
      'Weight Neutral: Does not cause weight gain.',
      'Cardiovascular Benefits: Associated with lower cardiac risk.'
    ],
    indications: ['Type 2 Diabetes Mellitus', 'Polycystic Ovary Syndrome (PCOS)'],
    dosage: 'Start with 500mg once or twice daily with meals.',
    precautions: ['Monitor renal function.', 'Avoid in cases of severe kidney disease.']
  },
  {
    id: 'atorva-hpi-10',
    name: 'Atorva-HPI 10mg',
    category: 'Cardiovascular',
    description: 'Statin medication used to prevent cardiovascular disease and treat abnormal lipid levels. Lowers LDL cholesterol and triglycerides.',
    price: 180.00,
    mrp: 240.00,
    imageUrl: 'https://images.unsplash.com/photo-1631549916768-4119b295f926?auto=format&fit=crop&q=80&w=600',
    images: [
      'https://images.unsplash.com/photo-1631549916768-4119b295f926?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1550572017-ed200f545dec?auto=format&fit=crop&q=80&w=600'
    ],
    composition: ['Atorvastatin 10mg'],
    benefits: [
      'Cholesterol Control: Significantly reduces "bad" cholesterol.',
      'Plaque Stability: Reduces the risk of cardiac events.',
      'Daily Convenience: Simple once-daily dosage.'
    ],
    indications: ['Hypercholesterolemia', 'Primary and secondary prevention of MI'],
    dosage: '10mg once daily in the evening.',
    precautions: ['Monitor liver enzymes.', 'Report unexplained muscle pain immediately.']
  },
  {
    id: 'ferro-boost-xt',
    name: 'Ferro-Boost XT Syrup',
    category: 'Nutraceuticals',
    description: 'Iron supplement with Folic Acid and Vitamin B12 to treat iron deficiency anemia and improve hemoglobin levels.',
    price: 155.00,
    mrp: 199.00,
    imageUrl: 'https://images.unsplash.com/photo-1471864190281-ad5fe9ac0724?auto=format&fit=crop&q=80&w=600',
    composition: ['Ferrous Ascorbate', 'Folic Acid', 'Zinc', 'Vitamin B12'],
    benefits: ['Rapid Iron Absorption', 'Improved Energy', 'Better Hemoglobin'],
    indications: ['Iron deficiency anemia', 'Pregnancy support'],
    dosage: '10ml twice daily or as prescribed.',
    precautions: ['Keep out of reach of children.']
  },
  {
    id: 'calci-strong-d3',
    name: 'Calci-Strong D3 Tablets',
    category: 'Nutraceuticals',
    description: 'Calcium and Vitamin D3 supplement for bone health and osteoporosis prevention.',
    price: 120.00,
    mrp: 160.00,
    imageUrl: 'https://images.unsplash.com/photo-1584362946021-d00474668853?auto=format&fit=crop&q=80&w=600',
    composition: ['Calcium Citrate', 'Vitamin D3', 'Magnesium'],
    benefits: ['Strengthens bones', 'Prevents fractures', 'Supports muscle function'],
    indications: ['Calcium deficiency', 'Osteoporosis', 'Bone healing'],
    dosage: '1 tablet daily at bedtime.',
    precautions: ['Avoid excessive intake.']
  },
  {
    id: 'vit-c-chew',
    name: 'Vit-C Chew 500mg',
    category: 'Nutraceuticals',
    description: 'Chewable Vitamin C tablets for immunity boosting and antioxidant protection.',
    price: 65.00,
    mrp: 85.00,
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600',
    composition: ['Vitamin C (Ascorbic Acid) 500mg'],
    benefits: ['Boosts Immunity', 'Skin Health', 'Antioxidant'],
    indications: ['Common cold', 'Immunity support', 'Scurvy'],
    dosage: '1 chewable tablet daily.',
    precautions: ['None for adults.']
  },
  {
    id: 'joint-relief-plus',
    name: 'Joint-Relief Plus',
    category: 'Analgesics',
    description: 'Topical gel for rapid relief from joint and muscle pain associated with arthritis and sports injuries.',
    price: 95.00,
    mrp: 125.00,
    imageUrl: 'https://images.unsplash.com/photo-1555633514-abcee6ad93e1?auto=format&fit=crop&q=80&w=600',
    composition: ['Diclofenac Diethylamine', 'Menthol', 'Linseed Oil'],
    benefits: ['Localized pain relief', 'Reduced inflammation', 'Fast acting'],
    indications: ['Arthritis', 'Sprains', 'Muscle soreness'],
    dosage: 'Apply to affected area 3-4 times daily.',
    precautions: ['For external use only.']
  }
];

export const CATEGORIES = Array.from(new Set(PRODUCTS.map(p => p.category)));

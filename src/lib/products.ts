export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  packSize: string;
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
    id: 'pegno-d3-nano',
    name: 'Pegno D3 Nano Shots',
    category: 'Vitamins & Supplements',
    description: 'High-concentration Vitamin D3 supplement in a convenient nano-shot format for rapid absorption and correction of Vitamin D deficiency.',
    packSize: '4x5ml',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600',
    composition: ['Vitamin D3 (Cholecalciferol) - 60,000 IU'],
    benefits: ['Supports bone health', 'Enhances immunity', 'Rapid absorption'],
    indications: ['Vitamin D deficiency', 'Osteoporosis', 'General weakness'],
    dosage: 'As advised by physician: 1 shot weekly or as prescribed.',
    precautions: ['Monitor calcium levels', 'Not for daily use unless prescribed']
  },
  {
    id: 'pegno-d3-drop',
    name: 'Pegno D3 Drop',
    category: 'Pediatric Care',
    description: 'Specially formulated Vitamin D3 drops for infants and children to support healthy growth and development of bones and teeth.',
    packSize: '15ml',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600',
    composition: ['Vitamin D3 (Cholecalciferol) - 800 IU'],
    benefits: ['Supports healthy growth', 'Safe for children', 'Easy administration'],
    indications: ['Vitamin D deficiency in infants', 'Rickets prevention'],
    dosage: 'As advised by physician: Usually 1ml daily or as directed.',
    precautions: ['Do not exceed recommended dose']
  },
  {
    id: 'p-germina',
    name: 'P Germina',
    category: 'Gastrointestinal',
    description: 'Probiotic respules containing Bacillus Clausii to restore healthy gut flora and support digestive health during and after antibiotic treatment.',
    packSize: '10x5ml',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=600',
    composition: ['Bacillus Clausii - 2 Billion Spores (Respules)'],
    benefits: ['Restores gut flora', 'Relieves diarrhea', 'Supports immunity'],
    indications: ['Diarrhea', 'Post-antibiotic gut recovery', 'Dysbiosis'],
    dosage: 'As advised by physician: 1-2 respules daily.',
    precautions: ['For oral use only', 'Do not inject']
  },
  {
    id: 'canq-300',
    name: 'CanQ-300',
    category: 'Nutraceuticals',
    description: 'Premium nutraceutical formulation for cardiac health, fertility, and cellular energy, featuring high-dose Coenzyme Q10 and antioxidants.',
    packSize: '1x10 cap',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600',
    composition: [
      'Coenzyme Q10 (Ubidecarenone 300mg)',
      'Lycopene',
      'Omega 3'
    ],
    benefits: [
      'Improves heart function',
      'Enhances fertility',
      'Powerful antioxidant protection'
    ],
    indications: [
      'Male/Female infertility',
      'Cardiovascular health',
      'Oxidative stress'
    ],
    dosage: 'As advised by physician: 1 capsule daily after meals.',
    precautions: ['Consult doctor before use if pregnant']
  },
  {
    id: 'herbvol-plus',
    name: 'Herbvol Plus',
    category: 'Respiratory Care',
    description: 'Natural wellness softgel capsules designed for inhalation or oral use to provide relief from nasal congestion and respiratory discomfort.',
    packSize: '1x10 cap',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600',
    composition: [
      'Camphor',
      'Eucalyptol',
      'Menthol',
      'Terpinel'
    ],
    benefits: ['Instant nasal relief', 'Natural ingredients', 'Eases breathing'],
    indications: ['Common cold', 'Nasal congestion', 'Sinusitis'],
    dosage: 'As advised by physician: Use as an inhalant or as directed.',
    precautions: ['Avoid contact with eyes', 'Keep out of reach of children']
  },
  {
    id: 'ecopan-d',
    name: 'Ecopan D',
    category: 'Gastrointestinal',
    description: 'Effective combination of a proton pump inhibitor and a prokinetic agent for the treatment of acid reflux, GERD, and associated nausea.',
    packSize: '1x15 cap',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600',
    composition: ['Pantoprazole', 'Domperidone'],
    benefits: ['Reduces acidity', 'Stops nausea', 'Prevents heartburn'],
    indications: ['Acid reflux', 'GERD', 'Dyspepsia'],
    dosage: 'As advised by physician: Usually 1 capsule daily before breakfast.',
    precautions: ['Monitor long-term use', 'Avoid in severe renal impairment']
  },
  {
    id: 'ecopan-40',
    name: 'Ecopan-40',
    category: 'Gastrointestinal',
    description: 'Standard strength Pantoprazole 40mg for the effective management of stomach ulcers, hyperacidity, and esophageal erosion.',
    packSize: '1x15 cap',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=600',
    composition: ['Pantoprazole 40 mg'],
    benefits: ['Long-lasting relief', 'Heals stomach ulcers', 'Controls gastric acid'],
    indications: ['Peptic ulcers', 'Zollinger-Ellison syndrome', 'Hyperacidity'],
    dosage: 'As advised by physician: 1 tablet daily or as prescribed.',
    precautions: ['Inform doctor of liver issues']
  },
  {
    id: 'hpi-omega',
    name: 'HPI Omega',
    category: 'Nutraceuticals',
    description: 'High-quality Omega-3 fish oil supplement rich in EPA and DHA to support cardiovascular health, brain function, and joint mobility.',
    packSize: 'Pack of 30 caps',
    imageUrl: 'https://images.unsplash.com/photo-1626716493137-b67fe9501e76?auto=format&fit=crop&q=80&w=600',
    composition: ['Omega 3 fish oil (EPA+DHA)'],
    benefits: ['Supports heart health', 'Improves brain function', 'Reduces joint inflammation'],
    indications: ['High cholesterol', 'Cognitive support', 'Arthritis adjunct'],
    dosage: 'As advised by physician: 1 capsule daily after meals.',
    precautions: ['Monitor if taking blood thinners']
  },
  {
    id: 'durocal-d3',
    name: 'Durocal D3 Tablet',
    category: 'Bone Health',
    description: 'Balanced formulation of Calcium and Vitamin D3 to ensure optimal bone mineral density and prevent bone-related disorders.',
    packSize: '1x15 cap',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600',
    composition: [
      'Calcium Carbonate 500mg',
      'Vitamin D3 250iu'
    ],
    benefits: ['Strengthens bones', 'Improves calcium absorption', 'Prevents fractures'],
    indications: ['Calcium deficiency', 'Osteoporosis', 'Pregnancy support'],
    dosage: 'As advised by physician: 1 tablet daily.',
    precautions: ['Avoid in cases of kidney stones']
  },
  {
    id: 'cefram-500',
    name: 'Cefram 500 Tablet',
    category: 'Antibiotics',
    description: 'Broad-spectrum cephalosporin antibiotic for the effective treatment of respiratory, urinary, and soft tissue bacterial infections.',
    packSize: '1x 10 tab',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=600',
    composition: ['Cefuroxime Axetil 500 mg'],
    benefits: ['Broad spectrum efficacy', 'High stability', 'Rapid recovery'],
    indications: ['Pneumonia', 'UTI', 'Skin infections', 'Sinusitis'],
    dosage: 'As advised by physician: 1 tablet twice daily for 5-10 days.',
    precautions: ['Complete full course', 'Check for allergy to cephalosporins']
  },
  {
    id: 'ecoliv-300',
    name: 'Ecoliv 300 Tablet',
    category: 'Hepatology',
    description: 'Specialized medication for liver health, used to dissolve cholesterol gallstones and treat chronic liver diseases like primary biliary cirrhosis.',
    packSize: '1x10 tab',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600',
    composition: ['Ursodeoxycholic acid I.P 300 mg'],
    benefits: ['Dissolves gallstones', 'Protects liver cells', 'Improves bile flow'],
    indications: ['Gallstones', 'Liver cirrhosis', 'Alcoholic liver disease'],
    dosage: 'As advised by physician: As directed by the doctor.',
    precautions: ['Monitor liver function regularly']
  },
  {
    id: 'eco-zn-drip',
    name: 'Eco Zn Drip Injection',
    category: 'Critical Care',
    description: 'Intravenous Zinc Chloride injection for intensive care patients requiring essential trace element supplementation.',
    packSize: '10 ml',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600',
    composition: ['Zinc Chloride Injection 2.09mg'],
    benefits: ['Essential for immunity', 'Aids wound healing', 'Crucial in critical care'],
    indications: ['Zinc deficiency', 'Total Parenteral Nutrition (TPN)', 'Critical illness'],
    dosage: 'As advised by physician: Intravenous infusion as directed.',
    precautions: ['For institutional use only', 'Administer slowly']
  }
];

export const CATEGORIES = Array.from(new Set(PRODUCTS.map(p => p.category)));

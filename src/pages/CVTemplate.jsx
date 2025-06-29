import { useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';
import { Phone, Mail, MapPin, ChevronRight,CheckCircle } from 'lucide-react';

export default function CVTemplate() {
  const cvRef = useRef();

//   const handlePrint = useReactToPrint({
//     content: () => cvRef.current,
//     pageStyle: `
//       @page {
//         size: A4;
//         margin: 0;
//       }
//       @media print {
//         body {
//           -webkit-print-color-adjust: exact;
//           margin: 0;
//         }
//         .print-padding {
//           padding: 2cm;
//         }
//       }
//     `
//   });

  const experiences = [
    {
      title: "موزع مواد غذائية",
      company: " المؤسسة الوطنية لصناعة المواد الغذائية",
      period: "2023 - الحاضر",
      responsibilities: [
        "توزيع المواد الغذائية وفق معايير الجودة والسلامة الغذائية",
        "التنسيق مع الموردين والعملاء لضمان تلبية الطلبات",
        "مراقبة المخزون وإدارة سلسلة التوريد بكفاءة",
        "ضمان الالتزام بالمواعيد النهائية للتسليم"
      ]
    },
    {
      title: "مساعد موزع",
      company: "  بهارت اكليل الجبل",
      period: "2019 - 2021",
      responsibilities: [
        "مساعدة في عمليات التوزيع والتسليم اليومية",
        "إدارة سجلات التوزيع والتسليم بدقة",
        "معرفة منتجات المطاعم",
        "مساعد في التوصيل المنتجات للمطاعم",

      ]
    }
  ];

  const skills = {
    technical: [
      "قيادة المركبات التجارية"
    ],
    personal: [
      "العمل تحت الضغط",
      "التواصل الفعال مع الفريق والعملاء",
    ]
  };

//   const education = {
//     degree: "دبلوم في إدارة الأعمال",
//     institution: "المعهد التقني للتجارة والإدارة",
//     period: "2015 - 2017"
//   };
  // المؤهلات
  const certifications = [
    "شهادة سلامة الغذاء (HACCP)",
    "رخصة قيادة الشاحنات الثقيلة",
    "دورة في إدارة سلسلة التبريد",
    "تدريب في التعامل مع المواد الغذائية الحساسة"
  ];
  const languages = [
    { name: "العربية", level: "اللغة الأم" },
  
  ];

  return (
    <div className="min-h-screen w-full bg-white py-2 px-2 sm:px-6" dir="rtl">
      <div className="w-full mx-auto">
        <button 
        //   onClick={handlePrint}
          className=" print:hidden bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          طباعة السيرة الذاتية
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
          </svg>
        </button>
        
        <div ref={cvRef} className="bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-200">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-4 md:p-2 flex flex-col md:flex-row justify-between items-start">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">علاء علي أحمد سعد المغربي</h1>
              <p className="text-xl md:text-2xl font-medium mb-6">موزع مواد غذائية محترف</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <div className="bg-blue-700/30 p-2 rounded-full mr-3">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">الهاتف</p>
                    <p className="font-medium">
                         <a
                    href="tel:773040160"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    773040160{" "}
                  </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-700/30 p-2 rounded-full mr-3">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">البريد الإلكتروني</p>
                    <p className="font-medium">
                         <a
                    href="mailto:alaali1999p@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors">
alaali1999p@gmail.com                  </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-700/30 p-2 rounded-full mr-3">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">العنوان</p>
                    <p className="font-medium">بني مطر - الصباحة</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-0 md:ml-8">
              <div className="w-32 h-42 rounded-full border-4 border-white/80 overflow-hidden shadow-lg">
                <img 
                  src="src\assets\-5983407545689163919_121.jpg" 
                  alt="علاء المغربي"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="print-padding p-8 md:p-10">
            {/* Summary */}
            <section className="mb-10">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  <span className="bg-blue-100 p-2 rounded-full mr-3">
                    <ChevronRight className="h-5 w-5 text-blue-700" />
                  </span>
                  نبذة عني
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  محترف في توزيع المواد الغذائية مع أكثر من 5 سنوات من الخبرة في إدارة عمليات التوزيع، وإدارة المخزون، والتنسيق مع الموردين والعملاء. أمتلك مهارات تنظيمية ممتازة وقدرة على العمل تحت الضغط لضمان تلبية الطلبات في المواعيد المحددة. أسعى دائمًا لتحسين عمليات التوزيع وضمان جودة الخدمة المقدمة.
                </p>
              </div>
            </section>
            
            {/* Experience */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-100 flex items-center">
                <span className="bg-blue-100 p-2 rounded-full mr-3">
                  <ChevronRight className="h-5 w-5 text-blue-700" />
                </span>
                الخبرة العملية
              </h2>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="pl-6 border-l-4 border-blue-200">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                      <span className="text-blue-600 font-medium">{exp.period}</span>
                    </div>
                    <p className="text-blue-700 font-medium mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Skills */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-100 flex items-center">
                <span className="bg-blue-100 p-2 rounded-full mr-3">
                  <ChevronRight className="h-5 w-5 text-blue-700" />
                </span>
                المهارات
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 bg-gray-100 p-3 rounded-lg">المهارات الفنية</h3>
                  <ul className="space-y-3">
                    {skills.technical.map((skill, index) => (
                      <li key={index} className="flex items-center">
                        <div className="bg-blue-100 p-1 rounded-full mr-3">
                          <ChevronRight className="h-4 w-4 text-blue-700" />
                        </div>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 bg-gray-100 p-3 rounded-lg">المهارات الشخصية</h3>
                  <ul className="space-y-3">
                    {skills.personal.map((skill, index) => (
                      <li key={index} className="flex items-center">
                        <div className="bg-blue-100 p-1 rounded-full mr-3">
                          <ChevronRight className="h-4 w-4 text-blue-700" />
                        </div>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Education & Languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Education */}
              {/* <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-100 flex items-center">
                  <span className="bg-blue-100 p-2 rounded-full mr-3">
                    <ChevronRight className="h-5 w-5 text-blue-700" />
                  </span>
                  التعليم
                </h2>
                
                <div className="pl-6 border-l-4 border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-800">{education.degree}</h3>
                  <p className="text-blue-700 font-medium mb-2">{education.institution}</p>
                  <p className="text-gray-600">{education.period}</p>
                </div>
              </section> */}
                {/* الشهادات */}
            {/* <section>
              <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                <span className="bg-blue-100 p-2 rounded-full mr-3">
                  <CheckCircle className="text-blue-600" />
                </span>
                الشهادات والتدريبات
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <CheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </section> */}
              
              {/* Languages */}
              <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-100 flex items-center">
                  <span className="bg-blue-100 p-2 rounded-full mr-3">
                    <ChevronRight className="h-5 w-5 text-blue-700" />
                  </span>
                  اللغات
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h3 className="font-semibold text-gray-800">{lang.name}</h3>
                      <p className="text-gray-600 text-sm">{lang.level}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
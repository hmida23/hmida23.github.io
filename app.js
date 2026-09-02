const exercises = [
  {
    id:"bw-squat", cat:"warmup", ar:"القرفصاء بوزن الجسم", en:"Bodyweight Squat",
    time:"7:35–7:36", sets:"1", reps:"10 تكرارات", rest:"30 ثانية",
    goal:"رفع حرارة الجسم وتجهيز الوركين والركبتين والكاحلين.",
    cues:["القدمان بعرض مريح.","انزل بتحكم مع بقاء الصدر ثابتًا نسبيًا.","ادفع الأرض وعد للوقوف دون استعجال."],
    warning:"هذا إحماء؛ لا تحوله إلى مجموعة ثقيلة أو مرهقة.",
    svg:"squat",
    yt:"Bodyweight Squat proper form"
  },
  {
    id:"lunge", cat:"warmup", ar:"الطعنات الأمامية", en:"Forward Lunge",
    time:"7:36–7:37", sets:"1", reps:"6 لكل رجل", rest:"30 ثانية",
    goal:"تجهيز نمط الحركة الأحادي قبل العمل بالأوزان.",
    cues:["خطوة للأمام بطول مريح.","أنزل الجسم بتحكم.","حافظ على الركبة فوق اتجاه القدم ولا تدعها تنهار للداخل."],
    warning:"لا تحتاج إلى سرعة؛ الهدف هو الحركة السلسة.",
    svg:"lunge",
    yt:"Forward Lunge proper form"
  },
  {
    id:"glute", cat:"warmup", ar:"جسر الأرداف", en:"Glute Bridge",
    time:"7:37–7:38", sets:"1", reps:"10", rest:"30 ثانية",
    goal:"تنشيط الأرداف قبل تمارين الرجلين.",
    cues:["استلقِ والركبتان مثنيتان.","ارفع الحوض حتى يصبح الجذع والفخذان في خط متقارب.","اضغط الأرداف ثم انزل ببطء."],
    warning:"لا تبالغ في تقويس أسفل الظهر.",
    svg:"bridge",
    yt:"Glute Bridge proper form"
  },
  {
    id:"high-knees", cat:"warmup", ar:"رفع الركبتين عاليًا", en:"High Knees",
    time:"7:38–7:39", sets:"1", reps:"20 ثانية", rest:"—",
    goal:"رفع النبض وتجهيز حركة الجري.",
    cues:["ارفع الركبة بوتيرة سريعة ومسيطر عليها.","حافظ على وضعية منتصبة.","هبط بخفة ولا تدفع نفسك لأقصى سرعة."],
    warning:"إحماء فقط؛ ليس سباقًا.",
    svg:"knees",
    yt:"High Knees proper form"
  },
  {
    id:"lateral", cat:"warmup", ar:"الخطوات الجانبية", en:"Lateral Steps",
    time:"7:39–7:40", sets:"1", reps:"20 ثانية لكل جهة", rest:"—",
    goal:"تحضير الجسم للحركة الجانبية وتغيير الاتجاه.",
    cues:["اثنِ الركبتين قليلًا.","خذ خطوات جانبية قصيرة ومسيطرًا عليها.","حافظ على الركبتين باتجاه القدمين."],
    warning:"لا تقطع الخطوات بسرعة كبيرة في الإحماء.",
    svg:"lateral",
    yt:"Lateral steps warm up"
  },
  {
    id:"leg-press", cat:"strength", ar:"ضغط الرجلين على الجهاز", en:"Leg Press",
    time:"7:40–7:50 تقريبًا", sets:"3", reps:"8", rest:"90 ثانية",
    goal:"بناء قوة أساسية للرجلين مع ثبات جيد.",
    cues:["ضع القدمين بثبات وبعرض مريح.","انزل حتى مدى مريح يسمح ببقاء الظهر ثابتًا على المقعد.","ادفع المنصة بقوة مسيطَر عليها."],
    warning:"لا تقفل الركبتين بعنف، ولا تستخدم وزنًا يمنعك من التحكم.",
    svg:"legpress",
    yt:"Leg Press machine proper form"
  },
  {
    id:"rdl", cat:"strength", ar:"الرفعة الرومانية بالدمبل", en:"Dumbbell Romanian Deadlift",
    time:"7:50–8:00 تقريبًا", sets:"3", reps:"8", rest:"90 ثانية",
    goal:"تقوية أوتار الركبة والأرداف وسلسلة الجسم الخلفية.",
    cues:["أمسك الدمبل بجانب الجسم.","ادفع الوركين للخلف مع ثني بسيط للركبتين.","أوقف النزول عندما يبدأ الظهر بفقدان وضعيته."],
    warning:"لا تحاول لمس الأرض؛ جودة حركة الورك أهم من العمق.",
    svg:"rdl",
    yt:"Dumbbell Romanian Deadlift proper form"
  },
  {
    id:"bulgarian", cat:"strength", ar:"القرفصاء البلغارية بالدمبل", en:"Dumbbell Bulgarian Split Squat",
    time:"8:00–8:08 تقريبًا", sets:"2", reps:"8 لكل رجل", rest:"60–90 ثانية",
    goal:"تقوية كل رجل منفردة وتحسين الثبات.",
    cues:["ضع القدم الخلفية على سطح ثابت.","انزل عموديًا وببطء.","ادفع بالأرض بالقدم الأمامية وابقَ متزنًا."],
    warning:"ابدأ بوزن خفيف؛ التوازن أهم من الحمولة.",
    svg:"bulgarian",
    yt:"Dumbbell Bulgarian Split Squat proper form"
  },
  {
    id:"calf", cat:"strength", ar:"رفع السمانة واقفًا بالدمبل", en:"Standing Calf Raise",
    time:"8:08–8:12 تقريبًا", sets:"2", reps:"12–15", rest:"45–60 ثانية",
    goal:"تقوية السمانة لدعم الجري والدفع من القدم.",
    cues:["ارفع الكعبين ببطء.","توقف لحظة في الأعلى.","انزل حتى مدى مريح مع التحكم."],
    warning:"لا تقفز أو ترتد من الأسفل.",
    svg:"calf",
    yt:"Standing Calf Raise proper form"
  },
  {
    id:"lat", cat:"upper", ar:"السحب الأمامي للظهر", en:"Lat Pulldown",
    time:"8:15–8:21 تقريبًا", sets:"3", reps:"8–10", rest:"60–75 ثانية",
    goal:"تقوية عضلات الظهر والجزء العلوي.",
    cues:["ابدأ بصدر مرفوع قليلًا.","اسحب بالمرفقين إلى الأسفل.","أعد الذراعين ببطء بدل ترك الوزن يرتفع."],
    warning:"لا تتأرجح بجسمك للحصول على تكرار إضافي.",
    svg:"pulldown",
    yt:"Lat Pulldown proper form"
  },
  {
    id:"chest", cat:"upper", ar:"ضغط الصدر على الجهاز", en:"Chest Press",
    time:"8:21–8:27 تقريبًا", sets:"3", reps:"8–10", rest:"60–75 ثانية",
    goal:"تقوية الدفع للجزء العلوي.",
    cues:["اضبط المقعد بحيث تكون المقابض في مستوى مريح.","ادفع بدون قفل عنيف للمرفقين.","أعد الوزن بتحكم."],
    warning:"لا ترفع الكتفين نحو الأذنين.",
    svg:"press",
    yt:"Machine Chest Press proper form"
  },
  {
    id:"row", cat:"upper", ar:"السحب بالكابل أثناء الجلوس", en:"Seated Cable Row",
    time:"8:27–8:33 تقريبًا", sets:"2", reps:"10", rest:"60 ثانية",
    goal:"تقوية الظهر وتحسين التوازن مع تمارين الدفع.",
    cues:["اجلس بثبات والجذع متحكم.","اسحب المقبض باتجاه أسفل الصدر/البطن.","ضم لوحي الكتف دون مبالغة."],
    warning:"لا تستخدم حركة رمي للجذع.",
    svg:"row",
    yt:"Seated Cable Row proper form"
  },
  {
    id:"plank", cat:"core", ar:"البلانك", en:"Plank",
    time:"8:35–8:39 تقريبًا", sets:"3", reps:"30 ثانية", rest:"30–45 ثانية",
    goal:"تقوية الجذع للمساعدة في الثبات أثناء الجري وتغيير الاتجاه.",
    cues:["شد البطن والأرداف.","اجعل الجسم في خط واحد تقريبًا.","تنفس بهدوء ولا تحبس النفس."],
    warning:"عند هبوط الحوض أو رفعه كثيرًا، توقف وعدّل الوضع.",
    svg:"plank",
    yt:"Plank proper form"
  },
  {
    id:"farmer", cat:"core", ar:"المشي بحمل الدمبل", en:"Farmer Carry",
    time:"8:39–8:44 تقريبًا", sets:"2", reps:"30–40 متر", rest:"45–60 ثانية",
    goal:"تقوية الجذع والقبضة وتحسين الثبات أثناء المشي.",
    cues:["احمل دمبلًا في كل يد.","قف طويلًا وكتفاك مريحان.","امشِ بخطوات قصيرة ومسيطر عليها."],
    warning:"لا تدع الأوزان تجعلك تميل إلى أحد الجانبين.",
    svg:"farmer",
    yt:"Farmer Carry proper form"
  },
  {
    id:"deadbug", cat:"core", ar:"ديد بَغ", en:"Dead Bug",
    time:"8:44–8:48 تقريبًا", sets:"2", reps:"8 لكل جهة", rest:"45 ثانية",
    goal:"تثبيت الجذع مع تحريك الأطراف.",
    cues:["ثبت أسفل الظهر قريبًا من الأرض.","مدّ الذراع والساق المعاكسة ببطء.","ارجع دون فقدان التحكم."],
    warning:"قلّل مدى الحركة إذا بدأ أسفل الظهر بالانفصال عن الأرض.",
    svg:"deadbug",
    yt:"Dead Bug exercise proper form"
  },
  {
    id:"treadmill", cat:"cardio", ar:"فترات الجري على المشاية", en:"Treadmill Intervals",
    time:"8:50–9:00", sets:"5 جولات", reps:"30ث سريع + 60ث خفيف", rest:"ضمن الجولة",
    goal:"رفع التحمل والقدرة على تكرار الجهد، بطريقة أقرب لطبيعة كرة القدم.",
    cues:["2 دقيقة مشي سريع أولًا.","5 × (30ث جري سريع نسبيًا + 60ث مشي/جري خفيف).","2 دقيقة مشي خفيف في النهاية."],
    warning:"الجري السريع حوالي 7–8/10، وليس Sprint بأقصى سرعة.",
    svg:"treadmill",
    yt:"Treadmill intervals football conditioning"
  }
];

const schedule = [
  ["7:30–7:35","مشي سريع/دراجة","رفع الحرارة تدريجيًا"],
  ["7:35–7:40","إحماء ديناميكي","5 حركات قصيرة"],
  ["7:40–8:15","قوة الرجلين","Leg Press • RDL • Bulgarian • Calf"],
  ["8:15–8:35","الجزء العلوي","Lat Pulldown • Chest Press • Row"],
  ["8:35–8:50","Core + Carry","Plank • Farmer Carry • Dead Bug"],
  ["8:50–8:57","تحمل","فترات جري"],
  ["8:57–9:00","تهدئة","مشي خفيف"]
];

const svgParts = {
  head:`<circle cx="150" cy="32" r="16" fill="none" stroke="currentColor" stroke-width="8"/>`,
  torso:`<path d="M150 50 L150 112" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>`,
  armL:`<path d="M150 64 L116 90 L96 108" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>`,
  armR:`<path d="M150 64 L184 90 L204 108" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>`,
  legL:`<path d="M150 112 L126 150 L112 176" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>`,
  legR:`<path d="M150 112 L175 150 L190 176" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>`
};

function svgWrap(content, extra=""){
  return `<svg viewBox="0 0 300 185" role="img" aria-label="رسم توضيحي للحركة">
    <g color="#75b9ff">${content}</g>
    <path d="M35 177 H265" stroke="#263447" stroke-width="4" stroke-linecap="round"/>
    ${extra}
  </svg>`;
}
function illustration(type){
  const p=svgParts;
  if(type==="squat") return svgWrap(p.head+p.torso+
    `<path d="M150 112 L124 132 L138 156" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
     <path d="M150 112 L176 132 L163 156" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
     <path d="M138 156 L110 171" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>
     <path d="M163 156 L191 171" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>`);
  if(type==="lunge") return svgWrap(p.head+p.torso+
    `<path d="M150 112 L127 143 L92 169" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
     <path d="M150 112 L175 141 L205 151" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>`
  );
  if(type==="bridge") return svgWrap(
    `<circle cx="100" cy="116" r="14" fill="none" stroke="currentColor" stroke-width="8"/>
     <path d="M112 120 Q145 90 176 123" fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round"/>
     <path d="M176 123 L212 152 M146 108 L128 152" fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round"/>`
  );
  if(type==="knees") return svgWrap(p.head+p.torso+p.armL+p.armR+
    `<path d="M150 112 L120 142 L105 122" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
     <path d="M150 112 L180 138 L198 115" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>`);
  if(type==="lateral") return svgWrap(p.head+p.torso+p.armL+p.armR+
    `<path d="M150 112 L125 151 L95 151" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
     <path d="M150 112 L178 151 L208 151" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
     <path d="M70 140 l18 11 -18 11 M230 140 l-18 11 18 11" fill="none" stroke="currentColor" stroke-width="6"/>`);
  if(type==="legpress") return svgWrap(
    `<rect x="190" y="50" width="8" height="110" rx="4" fill="currentColor"/>
     <path d="M196 62 L240 30" stroke="currentColor" stroke-width="6"/>
     <path d="M198 95 L225 118" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
     <circle cx="165" cy="72" r="14" fill="none" stroke="currentColor" stroke-width="8"/>
     <path d="M155 85 L130 116 L157 142" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
     <path d="M157 142 L185 157" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
     <path d="M157 142 L128 158" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
     <path d="M185 157 L205 157 M128 158 L108 158" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
     <path d="M210 48 l30 0 M210 63 l30 0" stroke="#93a7be" stroke-width="4"/>`
  );
  if(type==="rdl") return svgWrap(p.head+
    `<path d="M150 50 L169 104 L184 135" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
     <path d="M170 70 L115 110" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
     <path d="M170 70 L214 111" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
     <path d="M184 135 L155 166 M184 135 L214 166" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
     <rect x="107" y="104" width="18" height="34" rx="4" fill="currentColor"/>
     <rect x="205" y="104" width="18" height="34" rx="4" fill="currentColor"/>`
  );
  if(type==="bulgarian") return svgWrap(p.head+
    `<path d="M150 50 L150 108 M150 67 L116 90 M150 67 L184 90" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
     <path d="M150 108 L121 141 L108 170 M150 108 L172 138 L207 138" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
     <rect x="103" y="103" width="16" height="32" rx="3" fill="currentColor"/><rect x="181" y="103" width="16" height="32" rx="3" fill="currentColor"/>
     <path d="M193 132 Q225 134 238 115" fill="none" stroke="#8fa7c0" stroke-width="7" stroke-linecap="round"/>`
  );
  if(type==="calf") return svgWrap(p.head+p.torso+p.armL+p.armR+
    `<path d="M150 112 L126 151 L126 170 M150 112 L176 151 L176 170" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
     <path d="M111 176 H139 M161 176 H189" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>
     <path d="M104 144 q10 -16 20 0 M176 144 q10 -16 20 0" fill="none" stroke="#a7bed4" stroke-width="5"/>`
  );
  if(type==="pulldown") return svgWrap(
    `<rect x="75" y="28" width="150" height="5" rx="3" fill="#7b8ea6"/>
     <path d="M150 33 L150 53 M110 48 Q150 66 190 48" fill="none" stroke="#9fb0c5" stroke-width="5"/>
     ${p.head+p.torso+p.armL+p.armR}
     <path d="M150 112 L122 150 L112 174 M150 112 L178 150 L190 174" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>`
  );
  if(type==="press") return svgWrap(
    `<rect x="90" y="116" width="120" height="45" rx="8" fill="#253346"/>
     <circle cx="155" cy="70" r="14" fill="none" stroke="currentColor" stroke-width="8"/>
     <path d="M155 84 L155 122 M155 93 L126 84 L112 63 M155 93 L184 84 L198 63" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>
     <path d="M120 62 H105 M198 62 H213" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
     <path d="M138 120 L123 160 M172 120 L187 160" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>`
  );
  if(type==="row") return svgWrap(
    `<path d="M65 55 H235 V62 H65 Z" fill="#253346"/>
     ${p.head}
     <path d="M150 50 L158 103" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
     <path d="M158 70 L122 98 M158 70 L178 100" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>
     <path d="M122 98 L103 121 M178 100 L198 122" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>
     <path d="M103 121 H205" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
     <path d="M102 121 L95 160 M198 122 L205 160" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
     <path d="M70 170 H220" stroke="#7e93aa" stroke-width="5"/>`
  );
  if(type==="plank") return svgWrap(
    `<circle cx="88" cy="123" r="13" fill="none" stroke="currentColor" stroke-width="8"/>
     <path d="M101 124 L151 136 L210 150" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
     <path d="M132 132 L114 163 M208 149 L226 171" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>`
  );
  if(type==="farmer") return svgWrap(p.head+p.torso+
    `<path d="M150 112 L126 151 L119 176 M150 112 L174 151 L181 176" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
     <path d="M150 67 L108 104 M150 67 L192 104" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>
     <rect x="91" y="101" width="17" height="38" rx="4" fill="currentColor"/><rect x="192" y="101" width="17" height="38" rx="4" fill="currentColor"/>`);
  if(type==="deadbug") return svgWrap(
    `<circle cx="89" cy="126" r="13" fill="none" stroke="currentColor" stroke-width="8"/>
     <path d="M101 127 L151 130" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
     <path d="M122 128 L98 100 M151 130 L182 101" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>
     <path d="M149 130 L124 162 M151 130 L182 160" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>`
  );
  if(type==="treadmill") return svgWrap(
    `<path d="M78 66 L216 66 L238 153 H86 Z" fill="none" stroke="#6d829b" stroke-width="6"/>
     <path d="M94 151 H234" stroke="#93a7be" stroke-width="8" stroke-linecap="round"/>
     <circle cx="156" cy="45" r="13" fill="none" stroke="currentColor" stroke-width="8"/>
     <path d="M156 58 L156 98 L135 128 L116 153 M156 98 L181 122 L205 145" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
     <path d="M156 73 L131 83 M156 73 L181 92" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>
     <path d="M75 66 H104" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>`
  );
  return svgWrap(p.head+p.torso+p.armL+p.armR+p.legL+p.legR);
}

function ytUrl(q){
  return "https://www.youtube.com/results?search_query="+encodeURIComponent(q+" form");
}

function card(ex){
  return `
    <article class="card" data-cat="${ex.cat}">
      <div class="card-top">
        <div class="card-title">
          <h3>${ex.ar}</h3>
          <div class="en">${ex.en}</div>
          <div class="meta">
            <span class="pill">${ex.time}</span>
            <span class="pill">${ex.sets} مجموعة</span>
            <span class="pill">${ex.reps}</span>
            <span class="pill">راحة ${ex.rest}</span>
          </div>
        </div>
      </div>
      <div class="illustration">
        <iframe src="https://www.youtube.com/results?search_query=${encodeURIComponent(ex.yt)}"
                style="width:100%; height:100%; border:none;"
                allowfullscreen></iframe>
      </div>
      <div class="body">
        <p><b>لماذا؟</b> ${ex.goal}</p>
        <p><b>طريقة الأداء:</b></p>
        <ul class="cue-list">${ex.cues.map(x=>`<li>${x}</li>`).join("")}</ul>
        <div class="warn"><b>تنبيه:</b> ${ex.warning}</div>
        <div class="actions">
          <a class="action" target="_blank" rel="noopener" href="${ytUrl(ex.yt)}">▶ فيديوهات يوتيوب</a>
          <a class="action secondary" href="#top" onclick="window.scrollTo({top:0,behavior:'smooth'});return false;">↑ للأعلى</a>
        </div>
      </div>
    </article>
  `;
}

document.addEventListener("DOMContentLoaded",()=>{
  document.querySelector("#timeline").innerHTML=schedule.map(s=>`
    <div class="slot">
      <div class="time">${s[0]}</div>
      <div class="name">${s[1]}</div>
      <div class="desc">${s[2]}</div>
    </div>`).join("");

  const grid=document.querySelector("#exerciseGrid");
  const render=(cat)=>{
    const list = cat==="all" ? exercises : exercises.filter(e=>e.cat===cat);
    grid.innerHTML=list.length?list.map(card).join(""):`<div class="empty">لا توجد تمارين في هذا التصنيف.</div>`;
  };
  render("all");

  document.querySelectorAll(".filter").forEach(btn=>{
    btn.addEventListener("click",()=>{
      document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      render(btn.dataset.filter);
    });
  });

  document.querySelector("#printBtn").addEventListener("click",()=>window.print());
});

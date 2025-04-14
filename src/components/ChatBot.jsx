import { useState } from "react";

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("id");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Halo! Saya siap membantu. Silakan tanyakan sesuatu.", time: new Date() }
  ]);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const faq = [
    {
      question_id: 1,
      keywords_id: ["siapa isna", "isna ayu siapa", "tentang isna ayu"],
      keywords_en: ["who is isna ayu", "introduce yourself"],
      answer: {
        id: "Isna Ayu adalah seorang Software Developer yang berfokus pada pengembangan aplikasi web dengan pengalaman dalam React, TypeScript, dan Java Spring.",
        en: "Isna Ayu is a Software Developer focusing on web application development, experienced with React, TypeScript, and Java Spring."
      }
    },
    {
      question_id: 2,
      keywords_id: ["teknologi apa saja", "stack apa aja", "tools yang dikuasai"],
      keywords_en: ["what technologies", "skills", "tech stack"],
      answer: {
        id: "Saya menguasai React, TypeScript, Java Spring Boot, Redux, REST API, Microservices, serta memiliki pengalaman dengan Docker dan Git.",
        en: "I am skilled in React, TypeScript, Java Spring Boot, Redux, REST APIs, Microservices,and also experienced with Docker and Git."
      }
    },
    {
      question_id: 3,
      keywords_id: ["hubungi isna", "kontak isna", "email isna"],
      keywords_en: ["contact isna ayu", "how to contact", "linkedin"],
      answer: {
        id: "Anda dapat menghubungi saya melalui LinkedIn atau email yang tercantum di portfolio saya.",
        en: "You can reach out to me via LinkedIn or the email listed on my portfolio."
      }
    },
    {
      question_id: 4,
      keywords_id: ["pengalaman kerja", "kerja dimana"],
      keywords_en: ["work experience", "experience", "career path"],
      answer: {
        id: "Saya memiliki pengalaman profesional di bidang pengembangan software, terutama dalam pengembangan aplikasi web menggunakan React, TypeScript, dan Java Spring.",
        en: "I have professional experience in software development, particularly in web application development using React, TypeScript, and Java Spring."
      }
    },
    {
      question_id: 5,
      keywords_id: ["kenapa jadi programmer", "motivasi jadi developer", "alasan jadi programmer"],
      keywords_en: ["why become a developer", "reason to be a programmer"],
      answer: {
        id: "Saya memilih menjadi Software Developer karena saya menyukai proses membangun solusi dan tantangan logika yang ada di dalamnya.",
        en: "I chose to become a Software Developer because I enjoy building digital solutions and love the logical challenges involved."
      }
    },
    {
      question_id: 6,
      keywords_id: ["projek apa saja", "contoh projek", "portfolio projek"],
      keywords_en: ["what projects", "sample projects", "portfolio projects"],
      answer: {
        id: "Beberapa project yang pernah saya kerjakan meliputi aplikasi manajemen data, sistem monitoring, dan dashboard analitik berbasis web dengan React, TypeScript, dan Java Spring Boot.",
        en: "Some of the projects I’ve worked on include data management apps, monitoring systems, and web-based analytic dashboards using React, TypeScript, and Java Spring Boot."
      }
    }
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMessage = { from: "user", text: input, time: new Date() };
    setMessages(prev => [...prev, newUserMessage]);
    setInput("");

    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      const matched = faq.find(item => {
        const list = language === "id" ? item.keywords_id : item.keywords_en;
        return list.some(keyword => lowerInput.includes(keyword.toLowerCase()));
      });

      const botReply = {
        from: "bot",
        text: matched
          ? matched.answer[language]
          : language === "id"
            ? "Maaf, saya belum memiliki jawaban untuk pertanyaan tersebut. Silakan hubungi saya melalui halaman kontak."
            : "Sorry, I don't have an answer for that question yet. Please reach me via the contact page.",
        time: new Date()
      };

      setMessages(prev => [...prev, botReply]);
    }, 800);
  };

  const getSuggestions = () => {
    return faq.map(item => {
      const list = language === "id" ? item.keywords_id : item.keywords_en;
      return list[0];
    }).filter(Boolean);
  };

  const formatTime = (time) => {
    return time ? new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="relative z-50">
        <img width="80" height="80" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-chatbot-robotics-flaticons-lineal-color-flat-icons.png" alt="Chatbot Icon" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="flex flex-col bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-md w-full relative h-[500px]">
            <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-red-500">✖️</button>

            <div className="flex justify-end gap-2 mb-2 mr-6">
              <button onClick={() => setLanguage('id')} className={`${language === 'id' ? 'opacity-100' : 'opacity-50'}`} title="Bahasa Indonesia">
                <img width="30" height="30" src="https://img.icons8.com/?size=100&id=60248&format=png&color=000000" />
              </button>
              <button onClick={() => setLanguage('en')} className={`${language === 'en' ? 'opacity-100' : 'opacity-50'}`} title="English">
                <img width="30" height="30" src="https://img.icons8.com/?size=100&id=15532&format=png&color=000000" />
              </button>
            </div>

            <div className="flex-1 overflow-auto mb-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"} items-end gap-2.5`}>
                  {msg.from === "bot" && (
                    <img className="w-8 h-8 rounded-full" src="/img/isnaayu.jpg" alt="Isna Ayu image" />
                  )}
                  <div className="flex flex-col gap-1 max-w-[320px]">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {msg.from === "user" ? (language === "id" ? "Anda" : "You") : "Isna Ayu"}
                      </span>
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{formatTime(msg.time)}</span>
                    </div>
                    <div className={`p-3 text-sm font-normal whitespace-pre-line break-words ${
                      msg.from === "user"
                        ? "bg-blue-500 text-white rounded-2xl rounded-br-none self-end"
                        : "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white rounded-2xl rounded-bl-none self-start"
                    }`} style={{ display: "inline-block", maxWidth: "100%", width: "fit-content" }}>
                      {msg.text}
                    </div>
                  </div>
                  {msg.from === "user" && (
                    <img className="w-8 h-8 rounded-full" src="https://img.icons8.com/?size=100&id=114900&format=png&color=000000" alt="User image" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-2 items-center relative z-50">
              <div className="relative">
                <button
                  onClick={() => setShowSuggestions(prev => !prev)}
                  className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  💡
                </button>
                {showSuggestions && (
                  <div className="absolute bottom-14 left-0 bg-white border rounded-lg shadow-md max-h-48 overflow-y-auto z-50 w-[200px]">
                    {getSuggestions().map((suggestion, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-sm"
                        onClick={() => {
                          setInput(suggestion);
                          setShowSuggestions(false);
                        }}
                      >
                        {suggestion}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <input
                type="text"
                className="flex-1 p-2 border rounded-lg text-sm focus:outline-none"
                placeholder={language === "id" ? "Tulis pesan..." : "Type your message..."}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button onClick={handleSend} className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">➤</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

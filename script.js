// تأكد من أن الدالة موجودة قبل استخدامها
async function getAIResponse() {
    const userInput = document.getElementById("userInput").value;
    const responseDiv = document.getElementById("response");
    responseDiv.textContent = "جاري التحميل...";
  
    try {
      const apiKey = "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"; // استبدل بمفتاحك الخاص
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ${apiKey}'
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userInput }],
        })
      });
  
      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        responseDiv.textContent = data.choices[0].message.content;
      } else {
        responseDiv.textContent = "لم يتم استلام رد من الذكاء الاصطناعي.";
      }
    } catch (error) {
      responseDiv.textContent = "حدث خطأ أثناء الاتصال بالذكاء الاصطناعي.";
      console.error(error);
    }
  }

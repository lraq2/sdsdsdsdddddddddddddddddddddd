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

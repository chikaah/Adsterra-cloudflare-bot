export default {
  async fetch(request, env, ctx) {
    const adLink = "https://www.profitableratecpm.com/gek6e26ws?key=8fc5fec2b6aa16de54e32b8a1a75c315";

    try {
      const res = await fetch(adLink, {
        method: "GET",
        headers: {
          "User-Agent": request.headers.get("User-Agent") || "Mozilla/5.0",
          "Accept": "*/*",
        },
      });

      return new Response("Fake visit sent!", {
        status: 200,
        headers: { "content-type": "text/plain" },
      });
    } catch (e) {
      return new Response("Error visiting Adsterra link", {
        status: 500,
        headers: { "content-type": "text/plain" },
      });
    }
  },
};
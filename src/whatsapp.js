export const WHATSAPP_LINK =
  "https://wa.me/5547992647704?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20Metamorfase";

// Em /agosto o mesmo componente de botão aponta para o checkout e para
// âncoras internas, então a conversão só dispara em links de WhatsApp.
export function isWhatsAppLink(href) {
  return (
    typeof href === "string" &&
    (href.includes("wa.me") || href.includes("api.whatsapp.com"))
  );
}

/**
 * Google Tag Manager Analytics Helper
 * Funções para rastrear eventos e enviar para o GTM
 */

interface EventData {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Envia um evento para o Google Tag Manager dataLayer
 * @param eventName - Nome do evento (ex: 'whatsapp_click')
 * @param eventData - Dados adicionais do evento
 */
export const trackEvent = (eventName: string, eventData?: EventData): void => {
  try {
    // Verifica se o GTM está carregado
    if (typeof window !== 'undefined' && window.dataLayer) {
      // Sanitiza os dados para não enviar informações sensíveis
      const sanitizedData = sanitizeEventData(eventData);
      
      // Push do evento para o dataLayer
      window.dataLayer.push({
        event: eventName,
        ...sanitizedData,
        timestamp: new Date().toISOString()
      });
      
      console.log('📊 GTM Event:', eventName, sanitizedData);
    } else {
      console.warn('⚠️ Google Tag Manager não está carregado');
    }
  } catch (error) {
    console.error('❌ Erro ao enviar evento para GTM:', error);
  }
};

/**
 * Sanitiza dados do evento para não enviar informações sensíveis
 */
const sanitizeEventData = (data?: EventData): EventData => {
  if (!data) return {};
  
  const sanitized: EventData = {};
  
  Object.keys(data).forEach(key => {
    const value = data[key];
    
    // Não envia emails completos, apenas indica se existe
    if (key.toLowerCase().includes('email')) {
      sanitized[key] = value ? 'provided' : 'not_provided';
      return;
    }
    
    // Não envia telefones completos, apenas indica se existe
    if (key.toLowerCase().includes('phone') || key.toLowerCase().includes('tel')) {
      sanitized[key] = value ? 'provided' : 'not_provided';
      return;
    }
    
    // Para outros campos, envia o valor normalmente
    sanitized[key] = value;
  });
  
  return sanitized;
};

/**
 * Rastreia cliques em botões de WhatsApp
 */
export const trackWhatsAppClick = (location: string, storeName?: string): void => {
  trackEvent('whatsapp_click', {
    location,
    store_name: storeName,
    button_type: 'whatsapp'
  });
};

/**
 * Rastreia seleção de loja no StoreSelector
 */
export const trackStoreSelection = (storeName: string, storeWhatsApp: string): void => {
  trackEvent('whatsapp_store_selected', {
    store_name: storeName,
    store_whatsapp: storeWhatsApp
  });
};

/**
 * Rastreia envio de formulário
 */
export const trackFormSubmission = (formType: string, hasName: boolean, hasEmail: boolean, hasPhone: boolean): void => {
  trackEvent('form_submission', {
    form_type: formType,
    has_name: hasName,
    has_email: hasEmail,
    has_phone: hasPhone
  });
};

/**
 * Rastreia cliques em telefone
 */
export const trackPhoneClick = (location: string): void => {
  trackEvent('phone_click', {
    location,
    button_type: 'phone'
  });
};

/**
 * Rastreia cliques em CTAs
 */
export const trackCTAClick = (ctaName: string, location: string): void => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    location
  });
};

// Declaração de tipo para o dataLayer do GTM
declare global {
  interface Window {
    dataLayer: any[];
  }
}

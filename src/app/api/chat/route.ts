import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Intelligent demo responses for when API is not available
function getDemoResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();
  
  // Greeting responses
  if (lowerMessage.includes('bonjour') || lowerMessage.includes('hello') || lowerMessage.includes('salut') || lowerMessage.includes('hi')) {
    return "Hello! I am the CyberAI Agent. I specialize in cybersecurity and artificial intelligence. I can help you with security analysis, threat detection, security best practices, and cybersecurity task automation. How can I assist you today?";
  }
  
  // Security analysis
  if (lowerMessage.includes('sécurité') || lowerMessage.includes('security') || lowerMessage.includes('analyse') || lowerMessage.includes('analysis')) {
    return "For security analysis, I recommend a multi-layered approach:\n\n1. **Vulnerability Analysis**: Scan your systems with tools like Nmap, OpenVAS\n2. **Configuration Audit**: Verify security settings\n3. **Penetration Testing**: Simulate attacks to identify weaknesses\n4. **Continuous Monitoring**: Monitor suspicious activities in real-time\n\nWould you like me to detail any of these approaches?";
  }
  
  // Threat detection
  if (lowerMessage.includes('menace') || lowerMessage.includes('threat') || lowerMessage.includes('detection')) {
    return "Modern threat detection uses several techniques:\n\n🔍 **Signature-based**: Recognition of known patterns\n🤖 **Behavior-based**: Analysis of abnormal behaviors\n🧠 **ML/AI-powered**: Machine learning for new threats\n📊 **Threat intelligence**: Integration of threat databases\n\nI can help you implement a detection strategy adapted to your infrastructure.";
  }
  
  // Best practices
  if (lowerMessage.includes('best practice') || lowerMessage.includes('bonne pratique') || lowerMessage.includes('conseil') || lowerMessage.includes('advice')) {
    return "Here are essential cybersecurity best practices:\n\n✅ **Strong Authentication**: MFA, complex passwords\n✅ **Regular Updates**: Security patches\n✅ **Network Segmentation**: Isolate critical systems\n✅ **Backups**: Regular and tested backups\n✅ **Training**: User awareness\n✅ **Monitoring**: Continuous surveillance\n\nWhich practice would you like to explore further?";
  }
  
  // Automation
  if (lowerMessage.includes('automatisation') || lowerMessage.includes('automation') || lowerMessage.includes('script')) {
    return "Cybersecurity automation enables:\n\n🚀 **Rapid Response**: Automatic actions on incidents\n📊 **Reporting**: Automatically generated reports\n🔍 **Scanning**: Scheduled analyses\n⚡ **Efficiency**: Reduction of manual tasks\n\nI can help you design automation workflows for your specific needs.";
  }
  
  // Log analysis
  if (lowerMessage.includes('log') || lowerMessage.includes('journal') || lowerMessage.includes('analyse') || lowerMessage.includes('analysis')) {
    return "Log analysis is crucial for:\n\n📈 **Anomaly Detection**: Unusual patterns\n🔍 **Investigation**: Incident traceability\n⚠️ **Alerts**: Real-time notifications\n📊 **Compliance**: Audit and regulation\n\nI recommend using tools like ELK Stack, Splunk, or Graylog for effective analysis.";
  }
  
  // Default intelligent response
  return "I understand your request. As a specialized CyberAI Agent, I can help you with:\n\n🛡️ **Security Analysis**: Audit and vulnerability assessment\n🔍 **Threat Detection**: Identification and incident response\n📋 **Best Practices**: Security recommendations\n⚡ **Automation**: Security workflows and scripts\n📊 **Log Analysis**: Monitoring and investigation\n\nCould you specify your need so I can provide more detailed assistance?";
}

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const lastMessage = messages[messages.length - 1]?.content || '';

  try {
    // Check if API key is configured
    if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === 'test_key') {
      // Use demo mode with intelligent responses
      const demoResponse = getDemoResponse(lastMessage);
      return NextResponse.json({ response: demoResponse });
    }

    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20240620',
      max_tokens: 1024,
      messages: messages.map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content,
      })),
      system: `You are a CyberAI Task Automation Agent, specialized in cybersecurity and AI-powered assistance. 
      Your role is to help users with:
      - Security analysis and threat detection
      - Vulnerability assessment
      - Security best practices
      - Task automation for cybersecurity
      - Log analysis and monitoring
      
      Be professional, concise, and provide actionable insights. Always prioritize security and safety in your recommendations.`,
    });

    const responseText = message.content[0]?.type === 'text' ? message.content[0].text : '';

    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error('Claude API Error:', error);
    // Fallback to demo mode on API error
    const lastMessage = messages[messages.length - 1]?.content || '';
    const demoResponse = getDemoResponse(lastMessage);
    return NextResponse.json({ response: demoResponse });
  }
}
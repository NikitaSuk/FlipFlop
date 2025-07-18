"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const QuestionIcon = () => <span className="inline-block w-5 h-5 mr-2 align-middle">❓</span>;
const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
  <span className={`inline-block w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
    ▼
  </span>
);

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const faqData: FAQItem[] = [
    {
      question: "What is FlipDar?",
      answer: "FlipDar is a comprehensive reselling analytics platform that helps you research market prices, track your transactions, and maximize your profits when buying and selling items. We integrate with eBay to provide real-time market data and insights."
    },
    {
      question: "How does the price analysis work?",
      answer: "Our platform searches eBay's completed listings to find recently sold items that match your search. We then calculate average prices, price ranges, and market trends to help you make informed buying and selling decisions."
    },
    {
      question: "Is FlipDar free to use?",
      answer: "We offer a free tier with limited searches per day, plus premium plans with unlimited searches and advanced features. Check our subscription page for detailed pricing and feature comparisons."
    },
    {
      question: "How accurate are the price estimates?",
      answer: "Our price estimates are based on real eBay sales data from completed listings. However, prices can vary based on condition, timing, and market fluctuations. We recommend using our data as a guide alongside your own research."
    },
    {
      question: "Can I track my own buying and selling?",
      answer: "Yes! You can add your purchases and sales to track your profits, analyze your performance, and identify your most profitable items. Our analytics dashboard provides detailed insights into your flipping business."
    },
    {
      question: "What items can I research?",
      answer: "You can research virtually any item that's sold on eBay. Popular categories include electronics, collectibles, clothing, books, and more. The more specific your search terms, the more accurate your results will be."
    },
    {
      question: "How often is the data updated?",
      answer: "Our data is updated in real-time as we fetch the latest completed sales from eBay. This ensures you're always working with the most current market information."
    },
    {
      question: "Can I export my data?",
      answer: "Premium subscribers can export their transaction history and search data for further analysis in spreadsheets or other tools. This feature is available in our Pro and Enterprise plans."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use industry-standard encryption and security practices to protect your data. Your personal information and transaction history are never shared with third parties without your explicit consent."
    },
    {
      question: "What if I find incorrect data?",
      answer: "If you notice any discrepancies in our data, please contact our support team. We continuously monitor and improve our data accuracy, and your feedback helps us maintain high quality standards."
    },
    {
      question: "Can I use FlipDar on mobile?",
      answer: "Yes! FlipDar is fully responsive and works great on mobile devices. You can search for items, track transactions, and view analytics from your smartphone or tablet."
    },
    {
      question: "How do I get started?",
      answer: "Simply sign up for a free account and start searching for items you're interested in buying or selling. Add your first transaction to begin tracking your profits and building your analytics dashboard."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <QuestionIcon />
            <h1 className="text-3xl font-bold text-gray-800 text-center">Frequently Asked Questions</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about FlipDar, our features, and how to get the most out of your reselling business.
            </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-gray-800 pr-4">{item.question}</span>
                <ArrowIcon isOpen={openItems.includes(index)} />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`px-6 overflow-hidden transition-all duration-400 ease-in-out ${openItems.includes(index) ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'}`}
                style={{
                  transitionProperty: 'max-height, opacity, padding-bottom',
                }}
                aria-hidden={!openItems.includes(index)}
              >
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="bg-white rounded-2xl shadow p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Still Need Help?</h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="btn-primary w-full sm:w-auto"
            >
              Contact Support
            </Link>
            <Link 
              href="/account" 
              className="btn-secondary w-full sm:w-auto"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-stretch max-w-2xl mx-auto">
          <div className="flex-1 basis-1/2 min-w-[260px] max-w-xs flex flex-col">
            <div className="bg-white rounded-xl shadow p-6 text-center flex-1 flex flex-col justify-between">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold text-gray-800 mb-2">Analytics</h3>
              <p className="text-sm text-gray-600 mb-4">Track your profits and performance</p>
              <Link href="/account/analytics" className="text-green-600 hover:text-green-700 font-medium">
                View Analytics →
              </Link>
            </div>
          </div>
          <div className="flex-1 basis-1/2 min-w-[260px] max-w-xs flex flex-col">
            <div className="bg-white rounded-xl shadow p-6 text-center flex-1 flex flex-col justify-between">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="font-semibold text-gray-800 mb-2">Pricing</h3>
              <p className="text-sm text-gray-600 mb-4">Compare plans and features</p>
              <Link href="/account/subscription" className="text-green-600 hover:text-green-700 font-medium">
                View Plans →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
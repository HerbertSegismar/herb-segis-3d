import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";
import { ShoppingCart, CreditCard, User, Box, ArrowLeft } from "lucide-react";

const products = [
  {
    name: "Modern Chair",
    price: "$180.00",
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=400&fit=crop",
  },
  {
    name: "Minimalist Lamp",
    price: "$75.00",
    image:
      "https://images.unsplash.com/photo-1543198126-a83e0283b054?w=400&h=400&fit=crop",
  },
  {
    name: "Wooden Desk",
    price: "$320.00",
    image:
      "https://images.unsplash.com/photo-1593165314114-c1a74843948c?w=400&h=400&fit=crop",
  },
  {
    name: "Sleek Sofa",
    price: "$850.00",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
  },
];

const features = [
  {
    icon: ShoppingCart,
    title: "Intuitive Cart",
    description: "Seamless add-to-cart and checkout experience.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Stripe integration for safe and reliable transactions.",
  },
  {
    icon: User,
    title: "User Accounts",
    description:
      "Personalized user profiles, order history, and saved addresses.",
  },
  {
    icon: Box,
    title: "Product Management",
    description: "Easy-to-use admin panel for managing inventory.",
  },
];

export default function EcommercePlatform() {
  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      <header className="p-4 bg-slate-800/50 backdrop-blur-sm border-b border-white/10 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to={createPageUrl("Portfolio")}
            className="flex items-center gap-2 text-xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>E-Commerce Platform</span>
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm hover:text-blue-300 transition-colors"
            >
              Login
            </a>
            <button className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors">
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center text-center px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 opacity-50 z-0"></div>
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=800&fit=crop"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            alt="Furniture"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Design Your Space
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Discover curated, high-quality furniture to create a home you
              love.
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-transform hover:scale-105">
              Shop Now
            </button>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-6 rounded-xl text-center border border-white/10"
                >
                  <div className="inline-block p-4 bg-blue-500/20 rounded-full mb-4">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Featured Products
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-slate-800/50 rounded-lg overflow-hidden border border-white/10 hover-lift"
                >
                  <div className="overflow-hidden h-64">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-blue-400">{product.price}</p>
                    <button className="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import { PageTransition } from "@/components/layout/page-transition";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, UploadCloud, X } from "lucide-react";
import { motion } from "framer-motion";

// Sign up at formspree.io, create a form, and paste your endpoint here
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xykaqgzr";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(1, "Please tell us a bit about yourself or your company"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) setFile(dropped);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  };

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const payload = new window.FormData();
      payload.append("name", data.name);
      payload.append("email", data.email);
      payload.append("company", data.company ?? "");
      payload.append("message", data.message);
      if (file) payload.append("attachment", file);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      if (!response.ok) throw new Error("Submission failed");

      setSubmitted(true);
      form.reset();
      setFile(null);
    } catch {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again or refresh the page and try once more.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="container max-w-4xl mx-auto px-6 py-16">
        <div className="frosted-tile px-8 py-16">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-serif mb-5 text-[#0E1B4D]">Get in Touch</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Whether you have a question, want to explore a partnership, or are ready to drop your pitch deck. We read everything.
          </p>
          <address className="not-italic text-sm text-muted-foreground space-y-0.5">
            <p>Euclideslaan 55</p>
            <p>3584 BM Utrecht</p>
            <p>The Netherlands</p>
          </address>
        </motion.header>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <CheckCircle2 className="w-16 h-16 text-[#2575E8] mb-6" strokeWidth={1.2} />
            <h2 className="text-3xl font-serif text-[#0E1B4D] mb-4">Message received.</h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Thank you for reaching out. We will be in touch shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-10 text-sm text-[#2575E8] underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0E1B4D] font-medium">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="bg-white border-[#C8D5E3] focus:border-[#2575E8] h-12 rounded transition-colors"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0E1B4D] font-medium">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="you@company.com"
                          type="email"
                          className="bg-white border-[#C8D5E3] focus:border-[#2575E8] h-12 rounded transition-colors"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="company" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#0E1B4D] font-medium">Company <span className="text-muted-foreground font-normal">(optional)</span></FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your company or project"
                        className="bg-white border-[#C8D5E3] focus:border-[#2575E8] h-12 rounded transition-colors"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#0E1B4D] font-medium">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about yourself, your company, or what you are building..."
                        className="bg-white border-[#C8D5E3] focus:border-[#2575E8] min-h-[140px] rounded transition-colors resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <div>
                  <p className="text-sm font-medium text-[#0E1B4D] mb-2">Drop us your pitch(deck) <span className="text-muted-foreground font-normal">(optional)</span></p>
                  <div
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    className={`relative flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded p-8 transition-colors cursor-pointer ${isDragging ? "border-[#2575E8] bg-[#2575E8]/5" : "border-[#C8D5E3] bg-white hover:border-[#2575E8]/50"}`}
                    onClick={() => document.getElementById("pitch-file-input")?.click()}
                  >
                    <input
                      id="pitch-file-input"
                      type="file"
                      accept=".pdf,.ppt,.pptx,.doc,.docx"
                      className="hidden"
                      onChange={handleFileInput}
                    />
                    {file ? (
                      <div className="flex items-center gap-3 text-sm text-[#0E1B4D]">
                        <UploadCloud className="w-5 h-5 text-[#2575E8]" />
                        <span className="font-medium truncate max-w-xs">{file.name}</span>
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setFile(null); }}
                          className="text-muted-foreground hover:text-[#0E1B4D] transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <UploadCloud className="w-8 h-8 text-[#C8D5E3]" />
                        <p className="text-sm text-muted-foreground">Drag and drop or <span className="text-[#2575E8]">browse</span></p>
                        <p className="text-xs text-muted-foreground">PDF, PPT, PPTX, DOC up to 10MB</p>
                      </>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-base font-medium bg-[#2575E8] text-white hover:bg-[#1a62d0] rounded shadow-md shadow-[#2575E8]/20 transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        )}
        </div>
      </div>
    </PageTransition>
  );
}

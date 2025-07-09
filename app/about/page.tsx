'use client';

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About BCU Notes</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>BCU Notes</strong> is a student-focused platform created to help Bangalore City University students access high-quality, exam-relevant PDF notes with ease. Our mission is simple — make studying efficient and accessible for everyone, especially during exam seasons.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why We Exist</h2>
        <p className="text-gray-700 leading-relaxed">
          With the recent changes in the BCU academic scheme, students often struggle to find updated and organized study materials. Many still rely heavily on traditional textbooks, which can be time-consuming and less targeted for exams.
          <br /><br />
          We created this platform to bridge that gap — providing summarized, exam-ready notes contributed by teachers and curated for clarity and accuracy.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Well-structured PDF notes for each subject under the BCU curriculum</li>
          <li>Easy preview and download options</li>
          <li>100% free and accessible — just log in to start</li>
          <li>Mobile-friendly design for studying on the go</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sustainability & Funding</h2>
        <p className="text-gray-700 leading-relaxed">
          Our platform is sustained through non-intrusive ads, primarily via Google AdSense. These help keep the content free for students while supporting our efforts to maintain and expand the library of notes.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Join Us</h2>
        <p className="text-gray-700 leading-relaxed">
          If you are a teacher or student willing to contribute notes or feedback, we welcome your support. Together, we can build a thriving academic resource for BCU students.
        </p>
      </section>
    </main>
  );
}

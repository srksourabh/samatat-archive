export default function StatutoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Governance & Statutory</h1>
          <p className="text-xl text-gray-600">Transparency and compliance in all our operations</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              As a registered non-profit cultural organization, Samatat Sanskriti, Uttarpara operates in full compliance with all statutory requirements governing cultural and educational institutions. This page provides access to our governance documents, committee information, and official records.
            </p>
          </div>
        </div>
      </section>

      {/* Committee Formation */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Executive Committee</h2>

          <div className="bg-white rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-amber-600 mb-6">Current Committee (2024-2025)</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-amber-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-1">President</h4>
                <p className="text-gray-600">Name of President</p>
              </div>

              <div className="border-l-4 border-amber-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-1">Vice President</h4>
                <p className="text-gray-600">Name of Vice President</p>
              </div>

              <div className="border-l-4 border-amber-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-1">Secretary</h4>
                <p className="text-gray-600">Name of Secretary</p>
              </div>

              <div className="border-l-4 border-amber-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-1">Treasurer</h4>
                <p className="text-gray-600">Name of Treasurer</p>
              </div>

              <div className="border-l-4 border-amber-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-1">Committee Members</h4>
                <p className="text-gray-600">5 additional members</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Past Committees</h3>
            <div className="space-y-2">
              <a href="#" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Committee Formation 2023-2024</span>
                  <span className="text-amber-600">View PDF →</span>
                </div>
              </a>
              <a href="#" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Committee Formation 2022-2023</span>
                  <span className="text-amber-600">View PDF →</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AGM Records */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Annual General Meetings</h2>

          <div className="bg-white border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Year</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Date</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Minutes</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Resolutions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">2024</td>
                  <td className="px-6 py-4 text-gray-600">March 15, 2024</td>
                  <td className="px-6 py-4">
                    <a href="#" className="text-amber-600 hover:text-amber-700">Download PDF</a>
                  </td>
                  <td className="px-6 py-4">
                    <a href="#" className="text-amber-600 hover:text-amber-700">Download PDF</a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">2023</td>
                  <td className="px-6 py-4 text-gray-600">March 20, 2023</td>
                  <td className="px-6 py-4">
                    <a href="#" className="text-amber-600 hover:text-amber-700">Download PDF</a>
                  </td>
                  <td className="px-6 py-4">
                    <a href="#" className="text-amber-600 hover:text-amber-700">Download PDF</a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">2022</td>
                  <td className="px-6 py-4 text-gray-600">March 18, 2022</td>
                  <td className="px-6 py-4">
                    <a href="#" className="text-amber-600 hover:text-amber-700">Download PDF</a>
                  </td>
                  <td className="px-6 py-4">
                    <a href="#" className="text-amber-600 hover:text-amber-700">Download PDF</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Annual Reports</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <a href="#" className="bg-white p-6 rounded-lg border-2 border-transparent hover:border-amber-600 transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Annual Report 2023-24</h3>
              <p className="text-gray-600 mb-4">Complete activities, programs, and financial summary</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">📄 PDF • 2.5 MB</span>
                <span className="text-amber-600 font-semibold">Download →</span>
              </div>
            </a>

            <a href="#" className="bg-white p-6 rounded-lg border-2 border-transparent hover:border-amber-600 transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Annual Report 2022-23</h3>
              <p className="text-gray-600 mb-4">Complete activities, programs, and financial summary</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">📄 PDF • 2.3 MB</span>
                <span className="text-amber-600 font-semibold">Download →</span>
              </div>
            </a>

            <a href="#" className="bg-white p-6 rounded-lg border-2 border-transparent hover:border-amber-600 transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Annual Report 2021-22</h3>
              <p className="text-gray-600 mb-4">Complete activities, programs, and financial summary</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">📄 PDF • 2.1 MB</span>
                <span className="text-amber-600 font-semibold">Download →</span>
              </div>
            </a>

            <a href="#" className="bg-white p-6 rounded-lg border-2 border-transparent hover:border-amber-600 transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Annual Report 2020-21</h3>
              <p className="text-gray-600 mb-4">Complete activities, programs, and financial summary</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">📄 PDF • 1.9 MB</span>
                <span className="text-amber-600 font-semibold">Download →</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Registration & Compliance */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Registration & Compliance</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Organization Details</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-semibold text-gray-600">Registered Name</span>
                  <p className="text-gray-900">Samatat Sanskriti, Uttarpara</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-600">Registration Year</span>
                  <p className="text-gray-900">1999</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-600">Type</span>
                  <p className="text-gray-900">Non-Profit Cultural Organization</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-600">Location</span>
                  <p className="text-gray-900">Uttarpara, West Bengal, India</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Statutory Documents</h3>
              <div className="space-y-3">
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-amber-50 transition">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">Constitution</span>
                    <span className="text-amber-600">View →</span>
                  </div>
                </a>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-amber-50 transition">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">Registration Certificate</span>
                    <span className="text-amber-600">View →</span>
                  </div>
                </a>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-amber-50 transition">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">By-Laws</span>
                    <span className="text-amber-600">View →</span>
                  </div>
                </a>
                <a href="#" className="block p-3 bg-white rounded-lg hover:bg-amber-50 transition">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">Tax Exemption Certificate</span>
                    <span className="text-amber-600">View →</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

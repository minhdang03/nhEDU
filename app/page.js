import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-sky-900 mb-4">
            Trường THPT Nguyễn Huệ
          </h1>
          <p className="text-xl md:text-2xl text-sky-700 italic">
            &quot;Hành trình giáo dục của tương lai&quot;
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Về chúng tôi</h2>
          <p className="text-gray-600 leading-relaxed">
            Tọa lạc tại xã Tiên Thủy, huyện Châu Thành, tỉnh Bến Tre, Trường THPT Nguyễn Huệ 
            là môi trường giáo dục uy tín với sứ mệnh nâng cao chất lượng dạy và học, 
            đào tạo những thế hệ học sinh năng động, sáng tạo và toàn diện.
          </p>
        </div>

        <div className="bg-sky-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-sky-900 mb-4">Coming Soon</h2>
          <p className="text-gray-600 mb-6">
            Website chính thức của trường sẽ sớm ra mắt với nhiều tính năng mới.
            Đăng ký để nhận thông báo khi website chính thức hoạt động.
          </p>
          <button className="bg-sky-600 text-white px-8 py-3 rounded-full hover:bg-sky-700 transition-colors">
            Đăng ký nhận thông báo
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Liên hệ</h2>
          <div className="space-y-2 text-gray-600">
            <p>📍 Xã Tiên Thủy, Huyện Châu Thành, Tỉnh Bến Tre</p>
            <p>📧 admin@nh.edu.vn</p>
            <p>📞 0275.3867.XXX</p>
          </div>
        </div>
      </div>
    </main>
  );
}
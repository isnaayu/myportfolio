export const Certifications = () => {
  const pdfFiles = [
    { name: 'Pemograman Javascript', fileId: '1nVaq7032wicLJ-RpT8_-HsEpNdQ7-5y-' },
    { name: 'Pemograman Web', fileId: '1HNgQ--TDPk1dfhev8t1-ZqyQ4sHe6itn' },
    { name: 'Backend Engineer Golang', fileId: '1uwYA5XU2r1KgHvMCezWTZq1tuYI6oEGe' },
    { name: 'Computer Literate', fileId: '1nhFza97VYiZh5ykUExhCv99GKveiK9NA' },
    { name: 'IT Support Google', fileId: '1JgpQHtdq2jzTHNH2Fi2UOnTgUKuC8ad5' },
    { name: 'Git Version Control', fileId: '19KZK9lsNzlNCRTRAe2eBowAM2NyNZEtM' },
    { name: 'SQL Basic', fileId: '1X8c3gA3K_YNXlFsInZhqe13SHUB8gu8j' },
    { name: 'SQL Intermediate', fileId: '1AqgMX2J4qFGF9cwNjXyfbON-rtOJlObb' },
    { name: 'AWS Re/Start Graduate', fileId: '1fDHf5ayZgzvgZM3KudDlKq1rOBhoGE-k' },
  ];

  return (
    <>
      <div className="relative min-w-full bg-gray-100 py-8" id="certifications">
        {/* Background (Optional) */}
        {/* <div
          className="absolute inset-0 blur-xl h-[670px]"
          style={{
            background:
              "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
          }}
        ></div> */}
        
        <div className="relative container mx-auto px-4 sm:px-6">
          <p className="text-4xl font-semibold text-center my-11 dark:text-gray-400 text-gray-700">
            Certifications
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 my-4 md:gap-12 sm:gap-2">
            {pdfFiles.map((file, index) => (
              <div key={index} className="w-full max-w-xs p-4 border border-gray-300 rounded-lg shadow-md">
                <iframe
                  title={file.name}
                  src={`https://drive.google.com/file/d/${file.fileId}/preview`}
                  className="w-full h-60"
                  allow="autoplay"
                ></iframe>
                <p className="text-center mt-2 dark:text-gray-300">{file.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

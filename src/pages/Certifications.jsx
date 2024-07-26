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
    <div className="relative min-w-full" id="certifications">
        {/* <div
          className="absolute inset-0 blur-xl h-[670px]"
          style={{
            background:
              "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
          }}
        ></div> */}
        
        <div className="relative container mx-auto sm:px-6 px-6">
        <p className="text-4xl font-semibold text-center my-11 dark:text-gray-400 text-gray-700">
                  Certifications
        </p>
        <div className="flex flex-wrap gap-4 my-4">
      {pdfFiles.map((file, index) => (
        <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-md sm:p-2">
          <iframe
            title={file.name}
            src={`https://drive.google.com/file/d/${file.fileId}/preview`}
            width="450"
            height="305"
            allow="autoplay"
            className=""
          ></iframe>
          <p className="text-center mt-2 dark:text-gray-300">{file.name}</p>
        </div>
      ))}
      
    </div>


        </div>
        </div>


    </>
  )
}

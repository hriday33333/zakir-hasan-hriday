export default function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center space-x-1">
          <span className="material-symbols-outlined text-gray-900 dark:text-gray-100">
            shield
          </span>
          <span className="font-bold text-sm tracking-wider text-gray-900 dark:text-gray-100">
            ERDISON
          </span>
        </div>

        <button className="w-10 h-10 flex items-center justify-center">
          <span className="material-symbols-outlined text-gray-900 dark:text-gray-100 text-3xl">
            menu
          </span>
        </button>
      </header>

      {/* Main */}
      <main className="flex flex-col items-center">
        {/* Profile Image */}
        <div className="relative w-48 h-48 mb-8">
          <div className="absolute inset-0 border-2 border-gray-200 dark:border-gray-700 rounded-full scale-110"></div>

          <img
            className="w-full h-full rounded-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkxf4IGJ_w2bdhtP8jZBz1mLc3wu3X9X0B0cOFUCJ2Ve2XRCdbG4VAR8FKtOiFM0uvHTIZfDet6UiaDE6huX8OHD3PCPgwY_D8X0b4srDkkffw3f88e99uuMPaebSCsXU5Wb6Y8e_1ghfxZ6AqAhZhDaBoujhsZu0VnRTNM4VceiUokmTLsVqYrPc9fgmE2PWoSnvPzo0fr4yC1QQC-yIyHSmlFxeq0fFJSzEsxnCS20zrgkjfDngYn3RiIoJ83Oh0UPYCA1-6oUZe"
            alt="Portrait of Bruno Erdison"
          />
        </div>

        {/* Name */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-light text-gray-900 dark:text-white">
            Bruno Erdison
          </h1>
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mt-1">
            UI/UX Interaction Designer
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
            Based in Poland
          </p>
        </div>

        {/* Stats */}
        <div className="w-full grid grid-cols-2 gap-x-6 gap-y-8 mb-12 text-center">
          {[
            ['YEARS OF EXPERIENCE', '8'],
            ['SATISFACTION', '100%'],
            ['CLIENTS ON WORLDWIDE', '+80'],
            ['PROJECTS DONE', '675'],
          ].map(([label, value], i) => (
            <div key={i}>
              <p className="text-sm text-gray-400 dark:text-gray-500 tracking-wider">
                {label}
              </p>
              <p className="text-4xl font-light text-gray-900 dark:text-white mt-1">
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="w-full space-y-8 text-sm">
          <div>
            <h3 className="text-xs text-gray-400 dark:text-gray-500 tracking-widest mb-2">
              BIOGRAPHY
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Work for money and design for love! I'm Bruno, an UI/UX
              Interaction Designer based in Poland.
            </p>
          </div>

          <div>
            <h3 className="text-xs text-gray-400 dark:text-gray-500 tracking-widest mb-2">
              CONTACT
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Warsaw, Poland</p>
            <p className="text-gray-700 dark:text-gray-300">
              hello@brunoerdison.com
            </p>
            <p className="text-gray-700 dark:text-gray-300">+68 3568 89 86</p>
          </div>

          <div>
            <h3 className="text-xs text-gray-400 dark:text-gray-500 tracking-widest mb-2">
              SERVICES
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Website Design</p>
            <p className="text-gray-700 dark:text-gray-300">
              Mobile Application Design
            </p>
            <p className="text-gray-700 dark:text-gray-300">Animation</p>
          </div>
        </div>

        {/* Logos */}
        <div className="mt-16 w-full">
          <div className="flex items-center justify-between space-x-4 overflow-x-auto pb-2">
            {[
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCwJY8U1gAO9PTaajFpR1S8XMo1WQPRG8t94pL-R81ziqBYldxPMxteVQvPEKwT_CW7MUIoJL9clOZx1nbjyX_cne1R8q5K6O5rt0-1_jt-n4hNNG9q8HlZtm4e7cmVVVlU6JPscvaIfwC1Uk7zIirwd0ZTU2XFB-wijuF0QeVvft6CFammrwK2dvWWp8YziyniDux-PO_31VLe4y305RmSKCgx_ThIsfyIxvjer4TeWVQybB-2KdkwlaJdoSRw_82Lle_OhNXJ34Yd',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuDH9hZiGP6dUyohzwtHnAdKExylg4bDwtyMkduTMubSn7RWN-OhWZab3fXz2Pf1_8wD1y2JxLcf4t48wokWpRgxmbE824GR8y2561StFsVawOSAWdTVDXG_RtUM3bs9pbs0k5E6cSHxN8tWXGhBK56uKI0JJgh8t-BdUXt23bfCokDw3DMmOqkFMfTdj6rSivGQPSvdayS0I0KKTBWWhhh20Z_zrd96Pm2qAWpbeXt7DnDtO81cq8HokSZKtE0An7bHTmkV7CVppbfY',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuAU_ifR7_Olz7Qvw2uvAJyFXXidpGZMgrNFMz0vNqK06E9eVfMV3tZ3Zbkrxd-8EuLfrtQqpJnpdiTO_YBntcy0-nV01Qnec3UW-Jmm1-Krktsn6K-BTi2ebAZNnTBxSqqUEJoHZJxG-lSWkzq5QsHqw3-Y5mqXYbFOo_LSjDx98uLwCdxm-NEtyhZH9NFe67dqNO__UQJeycDDH2YNe2lupiyVl3f3vffYDM7ORbV_nTdql5LqNNH8-5E9InZqat6U_BtQQEZAIYKE',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuBF0gSGJozvylVbYiGQaJkLAKDGT4bjWebRD9q5ceV7VmSJbDIcoCmUlT5Zr7wbBLqiQHa8lVOYApvdSCKF-sM1PG6B5ypE_4gR9MLot-Jz6dJpAc8D2NN1xq9lRfq37OvBVR5ugqtCAoPDah_Lhtp52NepfjfcLdXiBSRH6oSOZ56ZdemHR_qYxYjVmhdtgSjpaNTqBydfbqwvQuG6Su5AQcl8NxD7halGMdzpDP0Yy_fKt70s0nt6VF26f0tEq49MZpxZlNesYysS',
            ].map((src, i) => (
              <img key={i} src={src} className="h-5" alt="logo" />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

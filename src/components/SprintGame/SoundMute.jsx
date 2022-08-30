function SoundMute({ isMute, setMute }) {
  const setMuteHandle = () => {
    setMute((prev) => !prev);
  };
  return (
    <>
      {isMute && (
        <div onClick={setMuteHandle} className="cursor-pointer">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="50px"
            height="50px"
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  fill="#fff"
                  stroke="#fff"
                  strokeWidth="11.1516"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  d="
			M47.205,308.271h106.337l163.207-163.205V66.75L179.782,203.721H47.205c-12.317,0-22.303,9.986-22.303,22.303v59.939
			C24.902,298.274,34.888,308.271,47.205,308.271z"
                />

                <polygon
                  fill="#fff"
                  stroke="#fff"
                  strokeWidth="11.1516"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="
			212.729,341.215 316.748,445.238 316.748,237.203 		"
                />
              </g>
              <path
                fill="#fff"
                d="M442.856,38.189c7.613-7.612,19.961-7.612,27.574,0l0,0c7.613,7.613,7.613,19.957,0,27.58L62.375,473.803
		c-7.623,7.623-19.962,7.623-27.574,0l0,0c-7.623-7.601-7.623-19.95,0-27.573L442.856,38.189z"
              />
              <path
                fill="#fff"
                d="M432.13,130.19c61.616,89.049,53.002,212.365-26.225,291.591c-4.355,4.355-4.355,11.413,0,15.769
		c2.179,2.178,5.032,3.268,7.885,3.268c2.854,0,5.707-1.09,7.886-3.268c87.938-87.938,96.553-225.33,26.386-323.297L432.13,130.19z"
              />
            </g>
          </svg>
        </div>
      )}
      {!isMute && (
        <div onClick={setMuteHandle} className="cursor-pointer">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="50px"
            height="50px"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <g>
              <path
                fill="#fff"
                stroke="#fff"
                strokeWidth="11.8597"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="
		M319.396,47.722l-145.663,145.67H32.735c-13.099,0-23.719,10.621-23.719,23.719v63.746c0,13.094,10.621,23.726,23.719,23.726
		h141.002l145.658,145.665V47.722z"
              />
              <path
                fill="#fff"
                d="M422.602,445.544c-3.034,0-6.069-1.158-8.385-3.475c-4.633-4.633-4.633-12.138,0-16.77
		c94.785-94.786,94.785-249.032,0-343.834c-4.633-4.633-4.633-12.138,0-16.771c4.632-4.633,12.137-4.633,16.77,0
		c104.039,104.051,104.039,273.335,0,377.375C428.671,444.386,425.636,445.544,422.602,445.544z"
              />
            </g>
          </svg>
        </div>
      )}
    </>
  );
}

export default SoundMute;

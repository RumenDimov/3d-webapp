import React from 'react';

import CustomButton from './CustomButton';


const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea className='aipicker-textarea' placeholder='Ask AI...'
      rows={5} value={prompt} onChange={(e) => setPrompt(e.target.value)} />

      <div className='flex flex-wrap gap-3'>

        {
          generatingImg ? (
            <CustomButton type='outline' title="Asking AI..." customeStyles="text-xs" />

          )
          :
          (
            <>
            <CustomButton type='outline' title="AI logo" handleClick={() => handleSubmit('logo')} customeStyles="text-xs" />

            <CustomButton type='filled' title="AI full" handleClick={() => handleSubmit('full')} customeStyles="text-xs" />
            </>
          )
        }
      </div>
    </div>
  )
}

export default AIPicker
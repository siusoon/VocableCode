# VocableCode_Plymouth
Vocable Code (Plymouth version)

# URL
- Click [here](https://rawgit.com/siusoon/VocableCode_Plymouth/master/index.html) on the chrome browser
- auto refresh for the json data file [here](https://rawgit.com/siusoon/VocableCode_Plymouth/master/inclusive/voices.json)
  - 30 seconds for the json file and 15 mins for the main url

# Pre-run Setting
1. Run on Google Chrome
2. Install autorefresh extension [here](https://chrome.google.com/webstore/detail/auto-refresh-plus/ohfjpkccecpdfkpmfocndhepolhljfhg)
3. Configure the autofresh to 15 mins (click the start button)
4. Install Minimal scrollbar extension [here](https://chrome.google.com/webstore/detail/minimal-scrollbar/ekopmclclddpoipchmcbhifohhbmjafd?hl=en)
5. Uncheck show toolbar (under view)
6. fullscreen
7. check:
    - no scrollbar
    - autorefresh
    - hide mouse cursor
    - full screen with no toolbar

# live configuration
**1. Check email with the voice:**
- a voice file
- a written statement
- name: first name and last name
- Download the voice file

**2. Check if the voice file is in wav format, if not:**
- Open Audacity
- Edit the voice
  - the first two words 'queer is' should be omitted
  - Effect > Noise reduction
  - Effect > Amplify > ok (with the default setting)
  - Try and see if it is too loud
- Export to wav file
  - file naming: firstname2.wav and firstname3.wav e.g Geoff2.wav
  - Put the voice files under the folder called 'voices'
  
**3. Prepare to upload files**
- Edit the JSON file
  - append the data
- Upload files (voice+json) to github server via the terminal
```
git add *
```
```
git commit -m "add files"
```
```
git push --set-upstream https://github.com/siusoon/VocableCode_Plymouth master
```

# Instalando o pipenv: sudo apt-get install pipenv
# Instalando o pytube: pipenv install pytube 
# === Import os modulos necessários ===
from pytube import YouTube, Playlist
from yt_dlp import YoutubeDL
import os
from tkinter import ttk
from tkinter import *
window = Tk() 
window.title("Download YouTube") 
window.geometry('500x300')

 
tab_control = ttk.Notebook(window) 
aba1 = ttk.Frame(tab_control) 
aba2 = ttk.Frame(tab_control) 
tab_control.add(aba1, text='Arquivo') 
tab_control.add(aba2, text='Playlist') 
tab_control.pack(expand=1, fill='both') 
Label(window,text = 'Download YouTuber', font ='arial 20 bold').pack()
link = StringVar()

Label(window, text = 'Coloque a url aqui:', font = 'arial 15 bold').place(x= 180 , y = 60)
link_enter = Entry(window, width = 55,textvariable = link)
link_enter.place(x = 32, y = 90)


# === Download Video ===
def DownloaderVideo():
    url =YouTube(str(link.get()))
    video = url.streams.get_highest_resolution().download(
        f'/home/mr-qwerty/Downloads/Musicas/'
    )
     
    Label(window, text = 'Download Concluido', font = 'arial 15').place(x= 180 , y = 210)  
    
def DownloaderVideos():
    playlist = Playlist(str(link.get()))
    for video in playlist:
        YouTube(video, use_oauth=True, allow_oauth_cache=True, on_progress_callback=ClearText()).streams.get_highest_resolution().download(
            f'/home/mr-qwerty/Downloads/Musicas/'
        )
        
    Label(window, text = 'Download Concluido', font = 'arial 15').place(x= 180 , y = 210) 
    
# === Download Audio ===
def DownloaderAudio():     
    url =YouTube(str(link.get()), on_progress_callback=ClearText())
    video = url.streams.filter(only_audio=True)[0].download(
        f'/home/mr-qwerty/Downloads/Musicas/'
    )
    Label(window, text = 'Download Concluido', font = 'arial 15').place(x= 150 , y = 210)
    
def DownloaderAudios():
    playlist = Playlist(str(link.get()))
    for video in playlist:
        YouTube(video, use_oauth=True, allow_oauth_cache=True, on_progress_callback=ClearText()).streams.filter(only_audio=True)[0].download(
            f'/home/mr-qwerty/Downloads/Musicas/'
        )
    Label(window, text = 'Download Concluido', font = 'arial 15').place(x= 150 , y = 210)
    
def ClearText():
    link_enter.delete(0, 'end')

Button(aba1,text = 'DOWNLOAD VIDEO', font = 'arial 15 bold' ,bg = 'pale violet red', padx = 2, command = DownloaderVideo).place(x=50 ,y = 125)
Button(aba1,text = 'DOWNLOAD AUDIO', font = 'arial 15 bold' ,bg = 'pale violet red', padx = 2, command =DownloaderAudio).place(x=270 ,y = 125)
Button(aba2,text = 'DOWNLOAD VIDEOS', font = 'arial 15 bold' ,bg = 'pale violet red', padx = 2, command = DownloaderVideos).place(x=50 ,y = 125)
Button(aba2,text = 'DOWNLOAD AUDIOS', font = 'arial 15 bold' ,bg = 'pale violet red', padx = 2, command =DownloaderAudios).place(x=270 ,y = 125)

window.mainloop() 
window = Tk()









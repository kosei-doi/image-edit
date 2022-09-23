import tkinter
from tkinter import colorchooser
from tkinter import * # * just means all

from PIL import Image,ImageTk
import numpy as np


im = np.array(Image.open('img.png'))

# for i in range(len(im)):
#     for j in range(len(im[i])):
#         for k in range(len(im[i,j])):
#             if im[i,j,k] == 3:
#                 print("hello")

#1.色選択ボタンのクラス
colorCode = "";

class ColorSelectButton(tkinter.Button):
    global colorCode
    def __init__(self, master):
        super().__init__(
            master=master,
            text="set color",
            width=15,
            command=self.color_change,  #クリック時に実行
            )

    def color_change(self):
        c = colorchooser.askcolor() #colorchooser呼び出し
        self.config(bg=c[1])
        colorCode = c[1]




# 画面作成
version = tkinter.Tcl().eval('info patchlevel')
window = tkinter.Tk()
window.geometry("1920x1080")
window.title("画像表示：" + version)


b = ColorSelectButton(master=window)
b.pack()

win_label = Label(window, text ="colorCode:"+colorCode) # Creates a label and tells where it should be placed i.e. the window    
win_label.pack() # W

img = Image.open('img.png')
w = img.width # 横幅を取得                                            
h = img.height # 縦幅を取得

img = img.resize(( int(w * (500/w)), int(h * (500/w)) ))

img = ImageTk.PhotoImage(img)


# キャンバス作成
canvas = tkinter.Canvas(window, bg="#deb887")
# キャンバス表示
canvas.place(x=0, y=0)

canvas.create_image(0, 0, image=img, anchor=tkinter.NW)
 
window.mainloop()
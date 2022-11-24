from django.contrib.gis.db import models # import the models gis module
from django.contrib.auth.models import User #import the user model
from django.utils import timezone #import the timezone module
import time
# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    usertype = models.CharField(max_length = 100)
    
    def __str__(self):
        return self.user.username

class Asset_deed(models.Model):
    geom = models.PolygonField(srid=4326, null=True, blank=True) #geometry field
    deed_no = models.IntegerField() # โฉนดที่ดินเลขที่
    land_no = models.IntegerField() # ที่ดินเลขที่
    book_no = models.IntegerField() # หนังสือเลขที่
    page_no = models.IntegerField() # หน้าเลขที่
    survey_page_number = models.IntegerField() # หน้าสำรวจเลขที่
    tam_code = models.CharField(max_length=100) # ตำบล/แขวง
    amp_code = models.CharField(max_length=100) # อำเภอ/เขต
    prov_code = models.CharField(max_length=100) #จังหวัด
    rai_number = models.IntegerField() #ไร่
    ngarn_number = models.IntegerField()# งาน
    sqw_number = models.FloatField() #ตารางวา
    date_add = models.DateField(default=timezone.now) #วันที่เพิ่มข้อมูล
    def __str__(self):
        return self.deed_no, self.land_no
    
    

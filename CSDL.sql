USE [QLSV_KhoaCNTT]
GO
/****** Object:  Table [dbo].[Tb_BoMon]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tb_BoMon](
	[MaBoMon] [varchar](50) NOT NULL,
	[TenBoMon] [nvarchar](50) NULL,
 CONSTRAINT [PK_Tb_Nganh] PRIMARY KEY CLUSTERED 
(
	[MaBoMon] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tb_ChuyenNganh]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tb_ChuyenNganh](
	[MaChuyenNganh] [varchar](50) NOT NULL,
	[TenChuyenNganh] [nvarchar](50) NULL,
	[CN_MaBoMon] [varchar](50) NULL,
 CONSTRAINT [PK_Tb_ChuyenNganh] PRIMARY KEY CLUSTERED 
(
	[MaChuyenNganh] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tb_Diem]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tb_Diem](
	[Masv] [varchar](12) NULL,
	[MaDiem] [varchar](12) NOT NULL,
	[D_MaMH] [varchar](50) NULL,
	[Diem] [float] NULL,
	[D_HK] [varchar](50) NULL,
	[xeploai] [nvarchar](50) NULL,
 CONSTRAINT [PK_Tb_Diem] PRIMARY KEY CLUSTERED 
(
	[MaDiem] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tb_HeDaoTao]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tb_HeDaoTao](
	[MaHDT] [varchar](50) NOT NULL,
	[TenHDT] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Tb_HeDaoTao] PRIMARY KEY CLUSTERED 
(
	[MaHDT] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tb_HocKy]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tb_HocKy](
	[Mahk] [varchar](50) NOT NULL,
	[Tenhk] [varchar](15) NULL,
	[Hk_MaKhoaHoc] [varchar](50) NULL,
	[Thoigian] [nvarchar](max) NULL,
 CONSTRAINT [PK_Tb_LichThi] PRIMARY KEY CLUSTERED 
(
	[Mahk] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tb_KhoaHoc]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tb_KhoaHoc](
	[MaKhoaHoc] [varchar](50) NOT NULL,
	[TenKhoaHoc] [nvarchar](max) NOT NULL,
	[ThoiGian] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Tb_KhoaHoc] PRIMARY KEY CLUSTERED 
(
	[MaKhoaHoc] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tb_Lop]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tb_Lop](
	[MaLop] [varchar](15) NOT NULL,
	[TenLop] [nvarchar](50) NOT NULL,
	[SiSo] [int] NOT NULL,
	[MaGVCN] [varchar](12) NULL,
	[L_HK] [varchar](50) NOT NULL,
	[L_MaChuyenNganh] [varchar](50) NOT NULL,
	[HeDaoTao] [varchar](50) NULL,
	[L_KH] [varchar](50) NULL,
 CONSTRAINT [PK_Tb_Lop] PRIMARY KEY CLUSTERED 
(
	[MaLop] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tb_MonHoc]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tb_MonHoc](
	[MaMon] [varchar](50) NOT NULL,
	[TenMon] [nvarchar](max) NULL,
	[SoTC] [nvarchar](150) NULL,
 CONSTRAINT [PK_Tb_QuaTrinhHocTap] PRIMARY KEY CLUSTERED 
(
	[MaMon] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tb_SinhVien]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tb_SinhVien](
	[MaSinhVien] [varchar](12) NOT NULL,
	[TenSinhVien] [nvarchar](max) NULL,
	[NgaySinh] [nvarchar](50) NULL,
	[GioiTinh] [nvarchar](4) NULL,
	[NoiSinh] [nvarchar](max) NULL,
	[QueQuan] [nvarchar](max) NULL,
	[QuocTich] [nvarchar](max) NULL,
	[DanToc] [nvarchar](max) NULL,
	[TonGiao] [nvarchar](max) NULL,
	[NoiThuongTru] [nvarchar](max) NULL,
	[DoiTuongTroCap] [nvarchar](max) NULL,
	[SoDienThoai] [varchar](15) NULL,
	[Email] [nvarchar](50) NULL,
	[CMND] [varchar](15) NULL,
	[DiaChiBaoTin] [nvarchar](max) NULL,
	[DiaChiTamTru] [nvarchar](max) NULL,
	[TinhTrang] [nvarchar](max) NULL,
	[SV_MaLop] [varchar](15) NULL,
	[HinhAnh] [nvarchar](max) NULL,
	[MatKhau] [varchar](60) NULL,
 CONSTRAINT [PK_Tb_SinhVien] PRIMARY KEY CLUSTERED 
(
	[MaSinhVien] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user](
	[user_id] [varchar](50) NOT NULL,
	[hoten] [nvarchar](150) NULL,
	[ngaysinh] [date] NULL,
	[diachi] [nvarchar](250) NULL,
	[gioitinh] [nvarchar](30) NULL,
	[email] [varchar](150) NULL,
	[taikhoan] [varchar](30) NULL,
	[matkhau] [varchar](60) NULL,
	[role] [varchar](30) NULL,
	[image_url] [varchar](300) NULL,
 CONSTRAINT [PK_user] PRIMARY KEY CLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Tb_ChuyenNganh]  WITH CHECK ADD  CONSTRAINT [FK_Tb_ChuyenNganh_Tb_Nganh] FOREIGN KEY([CN_MaBoMon])
REFERENCES [dbo].[Tb_BoMon] ([MaBoMon])
GO
ALTER TABLE [dbo].[Tb_ChuyenNganh] CHECK CONSTRAINT [FK_Tb_ChuyenNganh_Tb_Nganh]
GO
ALTER TABLE [dbo].[Tb_Diem]  WITH CHECK ADD  CONSTRAINT [FK_Tb_Diem_Tb_MonHoc] FOREIGN KEY([D_MaMH])
REFERENCES [dbo].[Tb_MonHoc] ([MaMon])
GO
ALTER TABLE [dbo].[Tb_Diem] CHECK CONSTRAINT [FK_Tb_Diem_Tb_MonHoc]
GO
ALTER TABLE [dbo].[Tb_Diem]  WITH CHECK ADD  CONSTRAINT [FK_Tb_Diem_Tb_SinhVien] FOREIGN KEY([Masv])
REFERENCES [dbo].[Tb_SinhVien] ([MaSinhVien])
GO
ALTER TABLE [dbo].[Tb_Diem] CHECK CONSTRAINT [FK_Tb_Diem_Tb_SinhVien]
GO
ALTER TABLE [dbo].[Tb_Lop]  WITH CHECK ADD  CONSTRAINT [FK_Tb_Lop_Tb_ChuyenNganh] FOREIGN KEY([L_MaChuyenNganh])
REFERENCES [dbo].[Tb_ChuyenNganh] ([MaChuyenNganh])
GO
ALTER TABLE [dbo].[Tb_Lop] CHECK CONSTRAINT [FK_Tb_Lop_Tb_ChuyenNganh]
GO
ALTER TABLE [dbo].[Tb_Lop]  WITH CHECK ADD  CONSTRAINT [FK_Tb_Lop_Tb_HeDaoTao] FOREIGN KEY([HeDaoTao])
REFERENCES [dbo].[Tb_HeDaoTao] ([MaHDT])
GO
ALTER TABLE [dbo].[Tb_Lop] CHECK CONSTRAINT [FK_Tb_Lop_Tb_HeDaoTao]
GO
ALTER TABLE [dbo].[Tb_SinhVien]  WITH CHECK ADD  CONSTRAINT [FK_Tb_SinhVien_Tb_Lop] FOREIGN KEY([SV_MaLop])
REFERENCES [dbo].[Tb_Lop] ([MaLop])
GO
ALTER TABLE [dbo].[Tb_SinhVien] CHECK CONSTRAINT [FK_Tb_SinhVien_Tb_Lop]
GO
/****** Object:  StoredProcedure [dbo].[Tb_Diem_create]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Tb_Diem_create]
(  @Masv		varchar(12)	,
   @MaDiem	varchar(12)	,
   @D_MaMH	varchar(50)	,
   @Diem		float	,
   @D_HK     varchar(50),
   @xeploai  nvarchar(50)
 )	
AS
    BEGIN
      INSERT INTO Tb_Diem
                (
				 	 Masv    , 
					 MaDiem	 ,
					 D_MaMH	 ,
					 Diem	,
					 D_HK,
					 xeploai 
					 
					  
				)
                VALUES
                (
				 @Masv    ,
				 @MaDiem	 ,
				 @D_MaMH	 ,
				 @Diem	,
				 @D_HK   ,
				 @xeploai
				
				
				);
        SELECT '';
    END;
GO
/****** Object:  StoredProcedure [dbo].[Tb_Diem_delete]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Tb_Diem_delete]
(@MaDiem	        varchar(50)
)
AS
    BEGIN
		delete from Tb_Diem where MaDiem = @MaDiem;
        SELECT '';
    END;
GO
/****** Object:  StoredProcedure [dbo].[Tb_Diem_get_by_id]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Tb_Diem_get_by_id](@MaDiem VARCHAR(12))
AS
    BEGIN
        SELECT          Masv,
						MaDiem,
						D_MaMH,
						Diem,
						D_HK,
						xeploai
 
					 
					 
        FROM Tb_Diem
      where  MaDiem = @MaDiem;
    END;
GO
/****** Object:  StoredProcedure [dbo].[Tb_Diem_search]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
	CREATE PROCEDURE [dbo].[Tb_Diem_search](@pageIndex  INT, 
                                       @pageSize   INT,
									   @Masv	varchar(12)
									   
									   )
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@pageSize <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.Diem ASC)) AS RowNumber, 
							 u.Masv,
							 s.TenSinhVien,
							 m.TenMon,
							 m.SoTC,
							 u.Diem	,
							 u.D_HK,
							 u.xeploai
							 			 		
						
                        INTO #Results1
                        FROM Tb_Diem AS u 
						join Tb_MonHoc AS m ON u.D_MaMH=m.MaMon
						join Tb_SinhVien AS s ON u.Masv = s.MaSinhVien
						join Tb_HocKy as hk on  u.D_HK =  hk.Mahk
						
						WHERE ((@Masv = '') OR (u.Masv = @Masv));
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@pageIndex - 1) * @pageSize + 1 AND(((@pageIndex - 1) * @pageSize + 1) + @pageSize) - 1
                              OR @pageIndex = -1
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
                         SELECT(ROW_NUMBER() OVER(
                                 ORDER BY u.Diem ASC)) AS RowNumber,  
                             
							 u.Masv,
							 s.TenSinhVien,
							 m.TenMon,
							 m.SoTC,
							 u.Diem	,
							 u.D_HK,
							 u.xeploai
							 		 			 	              
							
                        INTO #Results2
                        FROM Tb_Diem AS u 
						join Tb_MonHoc AS m ON u.D_MaMH=m.MaMon
						join Tb_SinhVien AS s ON u.Masv = s.MaSinhVien
						join Tb_HocKy as hk on  u.D_HK =  hk.Mahk
						WHERE ((@Masv = '') OR (u.Masv = @Masv));
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2
                        WHERE ROWNUMBER BETWEEN(@pageIndex - 1) * @pageSize + 1 AND(((@pageIndex - 1) * @pageSize + 1) + @pageSize) - 1
                              OR @pageIndex = -1
                        DROP TABLE #Results2; 
        END;
    END;
GO
/****** Object:  StoredProcedure [dbo].[Tb_Diem_tbc]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Tb_Diem_tbc](@Masv VARCHAR(12))
AS
    BEGIN
        SELECT  d.Masv, sv.TenSinhVien, l.MaLop,cn.TenChuyenNganh,
		bm.TenBoMon,hk.Tenhk,hk.Thoigian,kh.TenKhoaHoc,kh.ThoiGian, ROUND(AVG(d.Diem),2) as diemtb,

		xeploai = (case
		when ROUND(AVG(Diem),2)>=9 then N'Xuất Sắc'
		when ROUND(AVG(Diem),2)>=8 then N'Giỏi'
		when ROUND(AVG(Diem),2)>=7 then N'Khá'
		when ROUND(AVG(Diem),2)>=5 then N'Trung Bình'
		else N'Yếu' end)
		
        FROM Tb_Diem as d, Tb_SinhVien sv, Tb_HocKy hk, Tb_Lop l, 
		Tb_ChuyenNganh cn, Tb_BoMon bm, Tb_KhoaHoc kh

		where d.Masv = sv.MaSinhVien and d.D_HK = hk.Mahk 
		and hk.Hk_MaKhoaHoc = kh.MaKhoaHoc and	sv.SV_MaLop = l.MaLop 
		and l.L_MaChuyenNganh=cn.MaChuyenNganh and cn.CN_MaBoMon = bm.MaBoMon 
		and MaSinhVien in ( select MaSinhVien from Tb_SinhVien)
		
	    GROUP BY Masv,TenSinhVien,MaLop,TenChuyenNganh,TenBoMon,Tenhk,hk.Thoigian,TenKhoaHoc,kh.ThoiGian

   END;
GO
/****** Object:  StoredProcedure [dbo].[Tb_Diem_update]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Tb_Diem_update]
(@Masv		varchar(12)	,
   @MaDiem	varchar(12)	,
   @D_MaMH	varchar(50)	,
   @Diem		float,
   @D_HK varchar(50),
   @xeploai nvarchar(50)
)
AS
    BEGIN
   update [Tb_Diem] set 

					 Masv  = @Masv   , 
					 MaDiem	= @MaDiem ,
					 D_MaMH	= @D_MaMH ,
					 Diem	= @Diem,
					 D_HK = @D_HK,
					 xeploai = @xeploai

				where MaDiem = @MaDiem;
        SELECT '';
    END;
GO
/****** Object:  StoredProcedure [dbo].[Tb_Lop_search]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Tb_Lop_search](@pageIndex  INT, 
										   @pageSize   INT,
										   @MaLop VARCHAR(15),
										   @TenLop VARCHAR(50)
										 )
									   
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@pageSize <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY l.TenLop ASC)) AS RowNumber, 
							    l.MaLop,
								l.TenLop,
								l.SiSo ,
								l.MaGVCN , 
								l.L_HK	,
								l.L_MaChuyenNganh,
								l.HeDaoTao,
								l.L_KH,
								cn.TenChuyenNganh,
								bm.TenBoMon,
								kh.TenKhoaHoc
								
								
														
							
							
                        INTO #Results1
                        FROM [Tb_Lop] AS l
						join Tb_ChuyenNganh AS cn ON l.L_MaChuyenNganh = cn.MaChuyenNganh	
						join Tb_BoMon AS bm ON cn.CN_MaBoMon=bm.MaBoMon
						join Tb_KhoaHoc AS kh ON l.L_KH=kh.MaKhoaHoc
					
						
						WHERE ((@TenLop = '') OR (l.TenLop LIKE '%' + @TenLop + '%')) and ((@MaLop = '') OR (l.MaLop = @MaLop));
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@pageIndex - 1) * @pageSize + 1 AND(((@pageIndex - 1) * @pageSize + 1) + @pageSize) - 1
                              OR @pageIndex = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
                         SELECT(ROW_NUMBER() OVER(
                              ORDER BY l.TenLop ASC)) AS RowNumber, 
							    l.MaLop,
								l.TenLop,
								l.SiSo ,
								l.MaGVCN , 
								l.L_HK	,
								l.L_MaChuyenNganh,
								l.HeDaoTao,
								l.L_KH,
								cn.TenChuyenNganh,
								bm.TenBoMon,
								kh.TenKhoaHoc
								
								
														
							
							
                        INTO #Results2
                        FROM [Tb_Lop] AS l
						join Tb_ChuyenNganh AS cn ON l.L_MaChuyenNganh = cn.MaChuyenNganh	
						join Tb_BoMon AS bm ON cn.CN_MaBoMon=bm.MaBoMon
						join Tb_KhoaHoc AS kh ON l.L_KH=kh.MaKhoaHoc
					
						
						WHERE ((@TenLop = '') OR (l.TenLop LIKE '%' + @TenLop + '%')) and ((@MaLop = '') OR (l.MaLop = @MaLop));
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2;
                        DROP TABLE #Results2;
        END;
    END;
GO
/****** Object:  StoredProcedure [dbo].[Tb_SinhVien_create]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Tb_SinhVien_create]
(	@MaSinhVien     VARCHAR(12),
	@TenSinhVien 	NVARCHAR(MAX),
	@NgaySinh		NVARCHAR(50),
	@GioiTinh		NVARCHAR(4),
	@NoiSinh		NVARCHAR(MAX),
	@QueQuan		NVARCHAR(MAX),
	@QuocTich		NVARCHAR(MAX),
	@DanToc			NVARCHAR(MAX),
	@TonGiao		NVARCHAR(MAX),
	@NoiThuongTru	NVARCHAR(MAX),
	@DoiTuongTroCap	NVARCHAR(MAX),
	@SoDienThoai	INT,
	@Email			NVARCHAR(50),
	@CMND			INT,
	@DiaChiBaoTin	NVARCHAR(MAX),
	@DiaChiTamTru	NVARCHAR(MAX),
	@TinhTrang		NVARCHAR(MAX),
	@SV_MaLop		VARCHAR(12),
	@HinhAnh        NVARCHAR(MAX)
)
AS
    BEGIN
      INSERT INTO Tb_SinhVien
                (
				  MaSinhVien,
				  TenSinhVien,
                  NgaySinh		 ,
				  GioiTinh		 ,
				  NoiSinh		 ,
				  QueQuan		 ,
				  QuocTich		 ,
				  DanToc		,
				  TonGiao		 ,
				  NoiThuongTru	 ,
				  DoiTuongTroCap ,
				  SoDienThoai	 ,
				  Email			 ,
				  CMND			 ,
				  DiaChiBaoTin	 ,
				  DiaChiTamTru	 ,
				  TinhTrang		 ,
				  SV_MaLop		 ,
				  HinhAnh        
				  )
                VALUES
                (
				@MaSinhVien,
				@TenSinhVien,
				@NgaySinh		   ,
				@GioiTinh		   ,
				@NoiSinh		   ,
				@QueQuan		   ,
				@QuocTich		   ,
				@DanToc			   ,
				@TonGiao		   ,
				@NoiThuongTru	   ,
				@DoiTuongTroCap	   ,
				@SoDienThoai	   ,
				@Email			   ,
				@CMND			   ,
				@DiaChiBaoTin	   ,
				@DiaChiTamTru	   ,
				@TinhTrang		   ,
				@SV_MaLop		   ,
				@HinhAnh		   
	            );
        SELECT '';
    END;
GO
/****** Object:  StoredProcedure [dbo].[Tb_SinhVien_delete]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Tb_SinhVien_delete]
(@MaSinhVien   varchar(12)
)
AS
    BEGIN
		delete from [Tb_SinhVien] where MaSinhVien = @MaSinhVien;
        SELECT '';
    END;
GO
/****** Object:  StoredProcedure [dbo].[Tb_SinhVien_get_by_id]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Tb_SinhVien_get_by_id](@MaSinhVien varchar(12))
AS
    BEGIN
        SELECT Tb_SinhVien.MaSinhVien,
				 Tb_SinhVien.TenSinhVien,
                 Tb_SinhVien.NgaySinh		 ,
				 Tb_SinhVien.GioiTinh		 ,
				 Tb_SinhVien.NoiSinh		 ,
				 Tb_SinhVien.QueQuan		 ,
				 Tb_SinhVien.QuocTich		 ,
				 Tb_SinhVien.DanToc		,
				 Tb_SinhVien.TonGiao		 ,
				 Tb_SinhVien.NoiThuongTru	 ,
				 Tb_SinhVien.DoiTuongTroCap ,
				 Tb_SinhVien.SoDienThoai	 ,
				 Tb_SinhVien.Email			 ,
				 Tb_SinhVien.CMND			 ,
				 Tb_SinhVien.DiaChiBaoTin	 ,
				 Tb_SinhVien.DiaChiTamTru	 ,
				 Tb_SinhVien.TinhTrang		 ,
				 Tb_SinhVien.SV_MaLop		 ,
				 Tb_SinhVien.HinhAnh         ,
				 Tb_Lop.TenLop,
				 cn.MaChuyenNganh,
				 cn.TenChuyenNganh, 
				 bm.MaBoMon,
				 bm.TenBoMon
				 

				
				
				 
        FROM Tb_SinhVien 
		     join Tb_Lop on Tb_SinhVien.SV_MaLop = Tb_Lop.MaLop
			 join Tb_ChuyenNganh as cn on Tb_Lop.L_MaChuyenNganh = cn.MaChuyenNganh
			 join Tb_BoMon as bm on cn.CN_MaBoMon =bm.MaBoMon 
			

       WHERE @MaSinhVien = MaSinhVien
    END
GO
/****** Object:  StoredProcedure [dbo].[Tb_SinhVien_get_diem_by_idsv]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Tb_SinhVien_get_diem_by_idsv] ( @MaSinhVien varchar(12))
as
begin
         SELECT  sv.MaSinhVien,
				 sv.TenSinhVien,
				 sv.TinhTrang ,
				 mh.MaMon,
				 mh.TenMon,
				 mh.SoTC,
				 d.Diem
				
				 
        FROM Tb_SinhVien sv
			 join Tb_Diem as d on sv.MaSinhVien = d.Masv
			 join Tb_MonHoc as mh on d.D_MaMH = mh.MaMon
       WHERE @MaSinhVien = MaSinhVien
end
GO
/****** Object:  StoredProcedure [dbo].[Tb_SinhVien_get_diemtbc]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Tb_SinhVien_get_diemtbc] ( @MaSinhVien varchar(12))
as
begin
 SELECT  MaSinhVien,  ROUND(AVG(Diem),2) as diemtb,
 xeploai = (case
		when ROUND(AVG(Diem),2)>=9 then N'Xuất Sắc'
		when ROUND(AVG(Diem),2)>=8 then N'Giỏi'
		when ROUND(AVG(Diem),2)>=7 then N'Khá'
		when ROUND(AVG(Diem),2)>=5 then N'Trung Bình'
		else N'Yếu' end)
		
        FROM Tb_SinhVien 
		inner join Tb_Diem on Tb_SinhVien.MaSinhVien = Tb_Diem.Masv
		group by MaSinhVien
		having @MaSinhVien = MaSinhVien
end
GO
/****** Object:  StoredProcedure [dbo].[Tb_SinhVien_get_kqht]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Tb_SinhVien_get_kqht] ( @MaSinhVien varchar(12))
as
begin
 SELECT  sv.MaSinhVien, sv.TenSinhVien, l.MaLop,cn.TenChuyenNganh,
		bm.TenBoMon,hk.Tenhk,hk.Thoigian,kh.TenKhoaHoc,kh.ThoiGian, ROUND(AVG(d.Diem),2) as diemtb,

		xeploai = (case
		when ROUND(AVG(Diem),2)>=9 then N'Xuất Sắc'
		when ROUND(AVG(Diem),2)>=8 then N'Giỏi'
		when ROUND(AVG(Diem),2)>=7 then N'Khá'
		when ROUND(AVG(Diem),2)>=5 then N'Trung Bình'
		else N'Yếu' end)
		
        FROM Tb_SinhVien as sv, Tb_Diem d, Tb_HocKy hk, Tb_Lop l, 
		Tb_ChuyenNganh cn, Tb_BoMon bm, Tb_KhoaHoc kh

		where sv.MaSinhVien = d.Masv and d.D_HK = hk.Mahk 
		and hk.Hk_MaKhoaHoc = kh.MaKhoaHoc and	sv.SV_MaLop = l.MaLop 
		and l.L_MaChuyenNganh=cn.MaChuyenNganh and cn.CN_MaBoMon = bm.MaBoMon 
		
	    GROUP BY MaSinhVien,TenSinhVien,MaLop,TenChuyenNganh,TenBoMon,Tenhk,hk.Thoigian,
		TenKhoaHoc,kh.ThoiGian

		Having @MaSinhVien = MaSinhVien

		
end

GO
/****** Object:  StoredProcedure [dbo].[Tb_SinhVien_get_svgioi]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Tb_SinhVien_get_svgioi] ( @MaSinhVien varchar(12))
as
begin
 SELECT  sv.MaSinhVien, sv.TenSinhVien, l.MaLop,cn.TenChuyenNganh,
		bm.TenBoMon,hk.Tenhk,hk.Thoigian,kh.TenKhoaHoc,kh.ThoiGian, ROUND(AVG(d.Diem),2) as diemtb
		
        FROM Tb_SinhVien as sv, Tb_Diem d, Tb_HocKy hk, Tb_Lop l, 
		Tb_ChuyenNganh cn, Tb_BoMon bm, Tb_KhoaHoc kh

		where sv.MaSinhVien = d.Masv and d.D_HK = hk.Mahk 
		and hk.Hk_MaKhoaHoc = kh.MaKhoaHoc and	sv.SV_MaLop = l.MaLop 
		and l.L_MaChuyenNganh=cn.MaChuyenNganh and cn.CN_MaBoMon = bm.MaBoMon 
		
	    GROUP BY MaSinhVien,TenSinhVien,MaLop,TenChuyenNganh,TenBoMon,Tenhk,hk.Thoigian,
		TenKhoaHoc,kh.ThoiGian

		Having  ROUND(AVG(d.Diem),2)>=8

		
end

GO
/****** Object:  StoredProcedure [dbo].[Tb_SinhVien_get_svxuatsac]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Tb_SinhVien_get_svxuatsac] ( @MaSinhVien varchar(12))
as
begin
 SELECT  sv.MaSinhVien, sv.TenSinhVien, l.MaLop,cn.TenChuyenNganh,
		bm.TenBoMon,hk.Tenhk,hk.Thoigian,kh.TenKhoaHoc,kh.ThoiGian, ROUND(AVG(d.Diem),2) as diemtb
		
        FROM Tb_SinhVien as sv, Tb_Diem d, Tb_HocKy hk, Tb_Lop l, 
		Tb_ChuyenNganh cn, Tb_BoMon bm, Tb_KhoaHoc kh

		where sv.MaSinhVien = d.Masv and d.D_HK = hk.Mahk 
		and hk.Hk_MaKhoaHoc = kh.MaKhoaHoc and	sv.SV_MaLop = l.MaLop 
		and l.L_MaChuyenNganh=cn.MaChuyenNganh and cn.CN_MaBoMon = bm.MaBoMon 
		
	    GROUP BY MaSinhVien,TenSinhVien,MaLop,TenChuyenNganh,TenBoMon,Tenhk,hk.Thoigian,
		TenKhoaHoc,kh.ThoiGian

		Having  ROUND(AVG(d.Diem),2)>=9

		
end

GO
/****** Object:  StoredProcedure [dbo].[Tb_SinhVien_search]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Tb_SinhVien_search](@pageIndex  INT, 
										   @pageSize   INT,
										   @TenSinhVien NVARCHAR(max),
										   @SoDienThoai VARCHAR(15)
										 )
									   
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@pageSize <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY sv.TenSinhVien ASC)) AS RowNumber, 
							    sv.MaSinhVien,
								sv.TenSinhVien,
								sv.NgaySinh		 ,
								sv.GioiTinh		 , 
								sv.NoiSinh		 ,
								sv.QueQuan		 ,
								sv.QuocTich		 ,
								sv.DanToc		,
								sv.TonGiao		 ,
								sv.NoiThuongTru	 ,
								sv.DoiTuongTroCap ,
								sv.SoDienThoai	 ,
								sv.Email			 ,
								sv.CMND			 ,
								sv.DiaChiBaoTin	 ,
								sv.DiaChiTamTru	 ,
								sv.TinhTrang		 ,
								sv.SV_MaLop	 ,
								sv.HinhAnh,
								l.TenLop,
								cn.TenChuyenNganh,
								bm.TenBoMon
								
								
														
							
							
                        INTO #Results1
                        FROM [Tb_SinhVien] AS sv 
						join Tb_Lop AS l ON  sv.SV_MaLop= l.MaLop 
						join Tb_ChuyenNganh AS cn ON l.L_MaChuyenNganh = cn.MaChuyenNganh	
					
						join Tb_BoMon AS bm ON cn.CN_MaBoMon=bm.MaBoMon
					
						
						WHERE ((@TenSinhVien = '') OR (sv.TenSinhVien LIKE '%' + @TenSinhVien + '%')) and ((@SoDienThoai = '') OR (sv.SoDienThoai = @SoDienThoai));
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@pageIndex - 1) * @pageSize + 1 AND(((@pageIndex - 1) * @pageSize + 1) + @pageSize) - 1
                              OR @pageIndex = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
                         SELECT(ROW_NUMBER() OVER(
                               ORDER BY sv.TenSinhVien ASC)) AS RowNumber, 
                                sv.MaSinhVien,
							    sv.TenSinhVien,
								sv.NgaySinh		 ,
								sv.GioiTinh		 , 
								sv.NoiSinh		 ,
								sv.QueQuan		 ,
								sv.QuocTich		 ,
								sv.DanToc		,
								sv.TonGiao		 ,
								sv.NoiThuongTru	 ,
								sv.DoiTuongTroCap ,
								sv.SoDienThoai	 ,
								sv.Email			 ,
								sv.CMND			 ,
								sv.DiaChiBaoTin	 ,
								sv.DiaChiTamTru	 ,
								sv.TinhTrang		 ,
								sv.SV_MaLop		 ,
								sv.HinhAnh,
								l.TenLop,
								cn.TenChuyenNganh,
								bm.TenBoMon
								
								
								
								
							
                        INTO #Results2
                        FROM [Tb_SinhVien] AS sv 
						join Tb_Lop AS l ON  sv.SV_MaLop= l.MaLop 
						join Tb_ChuyenNganh AS cn ON l.L_MaChuyenNganh = cn.MaChuyenNganh	
						
						join Tb_BoMon AS bm ON cn.CN_MaBoMon=bm.MaBoMon
						
						
						
						WHERE ((@TenSinhVien = '') OR (sv.TenSinhVien LIKE '%' + @TenSinhVien + '%')) and  ((@SoDienThoai = '') OR (sv.SoDienThoai = @SoDienThoai));
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2;
                        DROP TABLE #Results2;
        END;
    END;
GO
/****** Object:  StoredProcedure [dbo].[Tb_SinhVien_update]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Tb_SinhVien_update]
(   @MaSinhVien     VARCHAR(12),
	@TenSinhVien 	NVARCHAR(MAX),
	@NgaySinh		VARCHAR(50),
	@GioiTinh		NVARCHAR(4),
	@NoiSinh		NVARCHAR(MAX),
	@QueQuan		NVARCHAR(MAX),
	@QuocTich		NVARCHAR(MAX),
	@DanToc			NVARCHAR(MAX),
	@TonGiao		NVARCHAR(MAX),
	@NoiThuongTru	NVARCHAR(MAX),
	@DoiTuongTroCap	NVARCHAR(MAX),
	@SoDienThoai	VARCHAR(15),
	@Email			NVARCHAR(50),
	@CMND			VARCHAR(15),
	@DiaChiBaoTin	NVARCHAR(MAX),
	@DiaChiTamTru	NVARCHAR(MAX),
	@TinhTrang		NVARCHAR(MAX),
	@SV_MaLop		VARCHAR(15),
	@HinhAnh        NVARCHAR(MAX)
)
AS
    BEGIN
   update [Tb_SinhVien] set 
			MaSinhVien          =	@MaSinhVien,
			TenSinhVien         =   @TenSinhVien,
			NgaySinh		    =	@NgaySinh		   ,
			GioiTinh		    =	@GioiTinh		   ,
			NoiSinh			    =	@NoiSinh		   ,
			QueQuan			    =	@QueQuan		   ,
			QuocTich		    =	@QuocTich		   ,
			DanToc			    =	@DanToc		   ,
			TonGiao			    =	@TonGiao		   ,
			NoiThuongTru	    =	@NoiThuongTru	   ,
			DoiTuongTroCap	    =	@DoiTuongTroCap   ,
			SoDienThoai		    =	@SoDienThoai	   ,
			Email				=	@Email			   ,
			CMND				=	@CMND			   ,
			DiaChiBaoTin		=	@DiaChiBaoTin	   ,
			DiaChiTamTru		=	@DiaChiTamTru	   ,
			TinhTrang			=	@TinhTrang		   ,
			SV_MaLop			=	@SV_MaLop		   ,
			HinhAnh           	=	@HinhAnh	
			WHERE MaSinhVien   =   @MaSinhVien;
	        SELECT '';
    END;
GO
/****** Object:  StoredProcedure [dbo].[user_create]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[user_create]
(@user_id              varchar(50), 
 @hoten          nvarchar(150) ,
 @ngaysinh         date  ,
 @diachi          nvarchar(250)  ,
 @gioitinh         nvarchar(30)  ,
 @email          varchar(150) ,
 @taikhoan         varchar(30) ,
 @matkhau         varchar(60)  ,
 @role          varchar(30) ,
 @image_url varchar(300) 
)
AS
    BEGIN
      INSERT INTO [user]
                (
				 	 [user_id]               , 
					 hoten           ,
					 ngaysinh          ,
					 diachi           ,
					 gioitinh           ,
					 email           ,
					 taikhoan         ,
					 matkhau           ,
					 role    ,
					 image_url
				)
                VALUES
                (
				 @user_id               , 
				 @hoten           ,
				 @ngaysinh          ,
				 @diachi           ,
				 @gioitinh           ,
				 @email           ,
				 @taikhoan         ,
				 @matkhau           ,
				 @role ,
				 @image_url
				);
        SELECT '';
    END;
GO
/****** Object:  StoredProcedure [dbo].[user_delete]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
	CREATE PROCEDURE [dbo].[user_delete]
(@user_id              varchar(50) 
)
AS
    BEGIN
		delete from [user] where user_id = @user_id;
        SELECT '';
    END;
GO
/****** Object:  StoredProcedure [dbo].[user_get_by_id]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[user_get_by_id](@user_id VARCHAR(50))
AS
    BEGIN
        SELECT  [user_id]               , 
					 hoten           ,
					 ngaysinh          ,
					 diachi           ,
					 gioitinh           ,
					 email           ,
					 taikhoan         ,
					 matkhau           ,
					 role      ,
					 image_url  
        FROM [user]
      where  [user_id] = @user_id;
    END;
GO
/****** Object:  StoredProcedure [dbo].[user_get_by_username_password]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
	CREATE PROCEDURE [dbo].[user_get_by_username_password](@taikhoan varchar(30), @matkhau varchar(60))
AS
    BEGIN
        SELECT  [user_id]               , 
					 hoten           ,
					 ngaysinh          ,
					 diachi           ,
					 gioitinh           ,
					 email           ,
					 taikhoan         ,
					 role      ,
					 image_url  
        FROM [user]
      where  taikhoan = @taikhoan and matkhau = @matkhau ;
    END;
GO
/****** Object:  StoredProcedure [dbo].[user_search]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
	CREATE PROCEDURE [dbo].[user_search] (@page_index  INT, 
                                       @page_size   INT,
									   @hoten nvarchar(150),
									    @taikhoan varchar(30)
									   )
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@page_size <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.hoten ASC)) AS RowNumber, 
                             u.user_id              , 
							 u.hoten           ,
							 u.ngaysinh          ,
							 u.diachi           ,
							 u.gioitinh           ,
							 u.email           ,
							 u.taikhoan         ,
							 u.matkhau           ,
							 u.role  ,
							 u.image_url  
                        INTO #Results1
                        FROM [user] AS u
						WHERE (u.taikhoan <> 'Admin') and ((@hoten = '') OR (u.hoten LIKE '%' + @hoten + '%')) and  ((@taikhoan = '') OR (u.taikhoan = @taikhoan)) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
                         SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.hoten ASC)) AS RowNumber, 
                             u.user_id              , 
							 u.hoten           ,
							 u.ngaysinh          ,
							 u.diachi           ,
							 u.gioitinh           ,
							 u.email           ,
							 u.taikhoan         ,
							 u.matkhau           ,
							 u.role     ,
							 u.image_url  
                        INTO #Results2
                        FROM [user] AS u
						WHERE (u.taikhoan <> 'Admin') and ((@hoten = '') OR (u.hoten LIKE '%' + @hoten + '%')) and  ((@taikhoan = '') OR (u.taikhoan = @taikhoan)) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2;
                        DROP TABLE #Results2;
        END;
    END;
GO
/****** Object:  StoredProcedure [dbo].[user_update]    Script Date: 1/7/2021 11:21:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[user_update]
(@user_id              varchar(50), 
 @hoten          nvarchar(150) ,
 @ngaysinh         date  ,
 @diachi          nvarchar(250)  ,
 @gioitinh         nvarchar(30)  ,
 @email          varchar(150) ,
 @taikhoan         varchar(30) ,
 @matkhau         varchar(60)  ,
 @role          varchar(30),
 @image_url         varchar(300)
)
AS
    BEGIN
   update [user] set 
				hoten= @hoten           ,
				ngaysinh= @ngaysinh          ,
				diachi= @diachi           ,
				gioitinh= @gioitinh           ,
				email= @email           ,
				taikhoan = @taikhoan,
				matkhau = @matkhau           ,
				role= @role ,
				image_url = @image_url 
				where user_id = @user_id;
			 
        SELECT '';
    END;
GO

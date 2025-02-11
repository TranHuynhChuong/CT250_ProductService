import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = SAN_PHAM & Document;

@Schema({
  timestamps: {
    createdAt: 'ngayTao_SP',
    updatedAt: 'ngayCapNhat_SP',
  },
})
export class SAN_PHAM {
  @Prop({ type: Number, required: true, unique: true, min: 1, max: 9999999 })
  ma_SP!: number;

  @Prop({ type: String, required: true, index: 'text', maxlength: 120 })
  ten_SP!: string;

  @Prop({ type: String, required: true })
  nganhHang_SP!: string;

  @Prop({ type: String, required: true })
  kichThuoc_SP!: string;

  @Prop({ type: Number, min: 1, max: 999999 })
  trongLuong_SP!: number;

  @Prop({ type: String, required: true, minlength: 100, maxlength: 3000 })
  moTa_SP!: string;

  @Prop({ type: [{ public_id: String, url: String }] })
  anh_SP?: { public_id: string; url: string }[];

  @Prop({ type: { public_id: String, url: String } })
  anhBia_SP?: { public_id: string; url: string };

  @Prop({ default: false })
  daXoa_SP?: boolean;

  @Prop({ default: false })
  daAn_SP?: boolean;

  @Prop({ type: Number, required: true })
  trongLuongSP!: number;

  @Prop({
    type: [
      {
        thuocTinh_CTSP: { type: String, required: true },
        giaTri_CTSP: { type: String, required: true },
      },
    ],
    required: true,
  })
  ttChiTiet_SP!: {
    thuocTinh_CTSP: string;
    giaTri_CTSP: string;
  }[];

  @Prop({
    type: [
      {
        tuyChonPhanLoai1_BH: { type: String },
        tuyChonPhanLoai2_BH: { type: String },
        giaBan_TC: { type: Number, required: true, min: 1000, max: 120000000 },
        khoHang_TC: { type: Number, required: true, min: 1, max: 999999 },
      },
    ],
  })
  ttBanHang_SP?: {
    tuyChonPhanLoai1_BH: string;
    tuyChonPhanLoai2_BH: string;
    giaBan_TC: number;
    khoHang_TC: number;
  }[];

  @Prop({
    type: [
      {
        ten_PL: String,
        cap_PL: Number,
        tuyChon_PL: [
          {
            ten_TC: { type: String, required: true },
            coAnh_TC: { type: Boolean, default: false },
            anh_TC: { type: { public_id: String, url: String } },
          },
        ],
      },
    ],
  })
  phanLoai_SP?: {
    ten_PL: string;
    cap_PL: number;
    tuyChon_PL: {
      ten_TC: string;
      coAnh_TC: boolean;
      anh_TC: { public_id: string; url: string };
    }[];
  }[];
}

export const SAN_PHAMSchema = SchemaFactory.createForClass(SAN_PHAM);

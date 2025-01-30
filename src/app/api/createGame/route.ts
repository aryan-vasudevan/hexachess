import { NextResponse } from "next/server";
import Game from "@/utils/models/gameModel";
import { connectDB } from "@/utils/db";

export async function POST(req: Request) {
    // Wait untill mongoDB is connected
    await connectDB();

    // Create the game
    const newGame = new Game({
        pieceLocations: {
            t1: { pieceType: "bishop", color: "B" },
            t2: { pieceType: "queen", color: "B" },
            t3: { pieceType: "king", color: "B" },
            t4: { pieceType: "knight", color: "B" },
            t5: { pieceType: "bishop", color: "B" },
            t6: { pieceType: "knight", color: "B" },
            t7: { pieceType: "rook", color: "B" },
            t10: { pieceType: "rook", color: "B" },
            t11: { pieceType: "pawn", color: "B" },
            t13: { pieceType: "bishop", color: "B" },
            t15: { pieceType: "pawn", color: "B" },
            t17: { pieceType: "pawn", color: "B" },
            t20: { pieceType: "pawn", color: "B" },
            t23: { pieceType: "pawn", color: "B" },
            t25: { pieceType: "pawn", color: "B" },
            t29: { pieceType: "pawn", color: "B" },
            t30: { pieceType: "pawn", color: "B" },
            t35: { pieceType: "pawn", color: "B" },

            t91: { pieceType: "bishop", color: "W" },
            t90: { pieceType: "king", color: "W" },
            t89: { pieceType: "queen", color: "W" },
            t88: { pieceType: "knight", color: "W" },
            t87: { pieceType: "bishop", color: "W" },
            t86: { pieceType: "knight", color: "W" },
            t85: { pieceType: "rook", color: "W" },
            t82: { pieceType: "rook", color: "W" },
            t81: { pieceType: "pawn", color: "W" },
            t79: { pieceType: "bishop", color: "W" },
            t77: { pieceType: "pawn", color: "W" },
            t75: { pieceType: "pawn", color: "W" },
            t72: { pieceType: "pawn", color: "W" },
            t69: { pieceType: "pawn", color: "W" },
            t67: { pieceType: "pawn", color: "W" },
            t63: { pieceType: "pawn", color: "W" },
            t62: { pieceType: "pawn", color: "W" },
            t57: { pieceType: "pawn", color: "W" },
        },
    });
    await newGame.save();

    // Send gameId to frontend (the game id is automatically created)
    return NextResponse.json({ gameId: newGame._id }, { status: 201 });
}
